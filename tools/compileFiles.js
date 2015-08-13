var glob = require('glob');
var fs = require('fs');

module.exports = function (path, callback) {
  var error;
  glob(path + '/**/*.json', function (e, r) {
    var tree = {};
    error = e;
    r.forEach(function (filePath) {
      var relPath = filePath.replace(path, '').replace(/_/g, ' ');
      var category = relPath.split('/')[1];
      var subcategory = relPath.split('/')[2];
      var tag = relPath.split('/')[3].split('.')[0];

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
      }
    });
    callback(error, error ? null : tree);
  });
};
