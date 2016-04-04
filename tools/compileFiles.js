var glob = require('glob');
var fs = require('fs');

module.exports = function (path, callback) {
  var error;
  glob(path + '/**/*.json', function (e, r) {
    var tree = {};
    error = e;
    r.forEach(function (filePath) {
      var relPath = filePath.replace(path, '').replace(/_/g, ' ');
      var geometry = relPath.split('/')[1];
      var category = relPath.split('/')[2];
      var subcategory = relPath.split('/')[3];
      var tag = relPath.split('/')[4].split('.')[0];

      if (!tree[category]) {
        tree[category] = {
          'subcategories': {}
        };
      }
      if (!tree[category].subcategories[subcategory]) {
        tree[category].subcategories[subcategory] = {
          'tags': {}
        };
      }
      if (!tree[category].subcategories[subcategory].tags[tag]) {
        tree[category].subcategories[subcategory].tags[tag] = JSON.parse(fs.readFileSync(filePath, 'utf8'));
      } else {
        tree[category].subcategories[subcategory].tags[tag].geometry.push(geometry);
      }
    });
    callback(error, error ? null : tree);
  });
};
