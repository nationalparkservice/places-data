var compileFiles = require('./compileFiles');

compileFiles('../data/presets', function (e, r) {
  if (!e) {
    console.log(JSON.stringify(r, null, 2));
  }
});
