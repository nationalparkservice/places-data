var csvParse = require('csv-parse');
var fs = require('fs');
var csvPath = '/home/jmcandrew/dev/places-data/tools/original.csv';

var parser = csvParse({
  columns: true
}, function (e, r) {
  var t = r.map(function (r) {
    return cleanArray((r.altNames + ',' + r.oldAltNames + ',' + r.iDSearchTerms).replace(/"|\[|\]|\{|\}/g, '').replace(/\s{0,},\s{0,}/g, ',').split(','));
  });
  t.forEach(function (y) {
    console.log(JSON.stringify(y));
  });
});
var cleanArray = function (a) {
  var newA = [];
  var blackList = [''];
  for (var i = 0; i < a.length; i++) {
    var t = a[i].trim();
    if (blackList.indexOf(t) === -1 && newA.indexOf(t) === -1) {
      newA.push(t);
    }
  }
  return newA;
};
fs.createReadStream(csvPath).pipe(parser);
