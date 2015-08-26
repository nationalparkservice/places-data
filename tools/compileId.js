var compileFiles = require('./compileFiles');
var jsonschema = require('jsonschema');
var presetSchema = require('./preset.json');

// TODO: Pull these from this document: https://github.com/nationalparkservice/places-editor/blob/master/data/presets/schema/preset.json
var acceptableFields = ['name','geometry','tags','addTags','removeTags','fields','icon','maki','terms','searchable','matchScore'];

var categories = function () {
  compileFiles('../data/presets', function (e, rawPresets) {
    var categoryList = {};
    for (var category in rawPresets) {
      // categoryList[category] = categoryList[category] || {'...
      // TODO Make categories like these: https://github.com/nationalparkservice/places-editor/tree/master/data/presets/categories
    }
  });
};

var presets = function (callback) {
  compileFiles('../data/presets', function (e, rawPresets) {
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
    callback(null, idPresets);
  });
};

presets(function (e, r) {
  console.log(JSON.stringify({
    presets: r
  }, null, 2));
});
