var compileFiles = require('./compileFiles');
var jsonschema = require('jsonschema');
var presetSchema = require('./preset.json');

var categories =  function () {
  compileFiles('../data/presets', function (e, rawPresets) {
    var categoryList = {};
    for (var category in rawPresets) {
      // categoryList[category] = categoryList[category] || {'...
      // TODO Make categories like these: https://github.com/nationalparkservice/places-editor/tree/master/data/presets/categories
    }
  });
};

var presets = function () {
  compileFiles('../data/presets', function (e, rawPresets) {
    var idPresets = {};
    for (var category in rawPresets) {
      for (var subcategory in rawPresets[category]) {
        for (var preset in rawPresets[category][subcategory]) {
          var isValid = jsonschema.validate(rawPresets[category][subcategory][preset], presetSchema);
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
          idPresets[category + '/' + subcategory + '/' + preset] = rawPresets[category][subcategory][preset];
        }
      }
    }
    // console.log(JSON.stringify(idPresets, null, 2));
    return idPresets;
  });
};

