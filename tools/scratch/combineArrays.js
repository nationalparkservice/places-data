var combineArray = function () {
  var arrays = [];
  for (var a in arguments) {
    if (Array.isArray(arguments[a])) {
      arrays.push(arguments[a]);
    };
  }
  var newArray = [];
  arrays.forEach(function (arr) {
    arr.forEach(function (t) {
      t = typeof t === 'string' ? t.trim() : t;
      if (t && t !== '' && newArray.indexOf(t) === -1) {
        newArray.push(t);
      }
    });
  });
  return newArray;
};
var a = ['hey', 'test', 'fee'];
var b = ['hey', ' test', 'new'];
var b = ['they', ' ttest  ', 'tnew'];
console.log(combineArray(a, b));
