var jsonschema = require('jsonschema');
var compileFiles = require('./compileFiles');
var presetSchema = require('./preset.json');

// TODO: Pull these from this document: https://github.com/nationalparkservice/places-editor/blob/master/data/presets/schema/preset.json
var acceptableFields = ['name', 'geometry', 'tags', 'addTags', 'removeTags', 'fields', 'icon', 'maki', 'terms', 'searchable', 'matchScore', 'defaultOrder', 'isDefault'];

var sortPreset = function (presets, categories, sortField, desc) {
  return function (a, b) {
    var AField = (a.match(/^category-/) ? presets[categories[a].members[0]] : presets[a])[sortField];
    var BField = (b.match(/^category-/) ? presets[categories[b].members[0]] : presets[b])[sortField];
    var descValue = desc === true ? -1 : 1;

    // Prioritize Presets
    AField = a.match(/^category-/) ? AField / 2 : AField;
    BField = b.match(/^category-/) ? BField / 2 : BField;

    if (AField < BField) {
      return 1 * descValue;
    } else if (AField > BField) {
      return -1 * descValue;
    } else {
      return 0;
    }
  };
};

var categories = function (presets) {
  var idCategories = {};
  var preset;

  for (var presetId in presets) {
    preset = presets[presetId];
    preset.geometry.forEach(function (geometry) {
      // Loop through all possible geometries
      var category = 'category-' + geometry + '-' + presetId.split('/')[0];
      if (preset.isDefault) {
        // This category has a default, so let's add it!
        if (idCategories[category]) {
          idCategories[category].members.push(presetId);
        } else {
          // Build a new category
          idCategories[category] = {
            'geometry': geometry,
            'displayName': decodeURIComponent(presetId.split('/')[0]).split(' ').map(function (w) {
              return w.substr(0, 1).toUpperCase() + w.substr(1);
            }).join(' '),
            'members': [
              presetId
            ]
          };
        }

        // The members need to be ordered by defaultOrder
        idCategories[category].members = idCategories[category].members.sort(sortPreset(presets, {}, 'defaultOrder', false));

        // Use the icon from the item with the highest MatchScore in the Category
        idCategories[category].icon = presets[idCategories[category].members[0]].icon;
        idCategories[category].maki = presets[idCategories[category].members[0]].maki;
      }
    });
  }

  return idCategories;
};

var defaults = function (presets, categories) {
  var idDefaults = {};
  var geography;

  // Add all of the categories as defaults
  for (var categoryId in categories) {
    geography = categoryId.split('-')[1];
    idDefaults[geography] = idDefaults[geography] || [];
    if (categories[categoryId].members.length === 1) {
      // One preset categories are a pain for the user, so just add the preset directly
      idDefaults[geography].push(categories[categoryId].members[0]);
    } else {
      idDefaults[geography].push(categoryId);
    }
  }

  // Add all of the defaults with a defaultOrder < 0
  for (var presetId in presets) {
    if (presets[presetId].defaultOrder < && presets[presetId].isDefault) {
      presets[presetId].geometry.forEach(function (geometry) {
        idDefaults[geometry] = idDefaults[geometry] || [];
        idDefaults[geometry].push(presetId);
      });
    }
  }

  // Sort each of the array by matchCount
  for (var group in idDefaults) {
    // Remove duplicated presets
    idDefaults[group] = idDefaults[group].filter(function (value, index, orig) {
      return orig.indexOf(value) === index;
    });

    // Remove presets from categories that are available outside those categories
    idDefaults[group].filter(function (d) {
      return d.match(/^category-/);
    }).forEach(function (d) {
      categories[d].members = categories[d].members.filter(function (member) {
        return idDefaults[group].indexOf(member) === -1;
      });
    });

    idDefaults[group] = idDefaults[group].sort(sortPreset(presets, categories, 'defaultOrder', false));
  }

  return idDefaults;
};

var presets = function (rawPresets) {
  var idPresets = {};
  for (var category in rawPresets) {
    for (var subcategory in rawPresets[category].subcategories) {
      for (var preset in rawPresets[category].subcategories[subcategory].tags) {
        var isValid = jsonschema.validate(rawPresets[category].subcategories[subcategory].tags[preset], presetSchema);
        if (isValid.length) {
          console.error(category + '/' + subcategory + '/' + preset + ': ');
          isValid.forEach(function (error) {
            if (error.property) {
              console.error(error.property + ' ' + error.message);
            } else {
              console.error(error);
            }
          });
          process.exit(1);
        }
        var currentPreset = rawPresets[category].subcategories[subcategory].tags[preset];
        currentPreset.searchable = currentPreset.inEditor;

        for (var field in currentPreset) {
          if (acceptableFields.indexOf(field) === -1) {
            delete currentPreset[field];
          }
        }
        idPresets[category + '/' + subcategory + '/' + preset] = currentPreset;
      }
    }
  }
  // console.log(JSON.stringify(idPresets, null, 2));
  return idPresets;
};

var compileNpmapPresets = function () {
  var outputFile = {};
  compileFiles('../data/presets', function (e, rawPresets) {
    if (!e) {
      outputFile.presets = presets(rawPresets);
      outputFile.categories = categories(outputFile.presets);
      outputFile.defaults = defaults(outputFile.presets, outputFile.categories);

      console.log('iD.data.npmapPresets = ' + JSON.stringify(outputFile, null, 2) + ';');
    } else {
      console.log('Error: ', e);
    }
  });
};

compileNpmapPresets();
