var fs = require('fs');
var getPresets = require('./compileFiles');
var outputFilename = './presets.sql';
var presetsPath = '../data/presets';
var schemaFilename = './preset.json';
var tableName = 'nps_presets';
var format = function (dataType, data) {
  var returnValue;
  var types = {
    'string': function (data) {
      return "'" + data.toString() + "'";
    },
    'integer': function (data) {
      return parseInt(data, 10);
    },
    'number': function (data) {
      return parseFloat(data, 10);
    },
    'boolean': function (data) {
      return JSON.parse(data);
    },
    'array': function (data) {
      if (Object.prototype.toString.call(data) === '[object Array]') {
        var returnValue = '';
        for (var i = 0; i < data.length; i++) {
          returnValue += "'" + data[i].toString() + "',";
        }
        if (returnValue) {
          returnValue = returnValue.substring(0, returnValue.length - 1);
        }
        return returnValue.length > 0 ? 'ARRAY[' + returnValue + ']' : 'null';
      } else {
        throw new Error("Array isn't really an array");
      }
    },
    'object': function (data) {
      if (Object.prototype.toString.call(data) === '[object Object]') {
        return "'" + JSON.stringify(data) + "'::json";
      } else {
        throw new Error("Object isn't really an object");
      }
    }
  };
  for (var type in types) {
    if (dataType.type === type) {
      returnValue = types[type](data);
      break;
    }
  }
  if (dataType.required && returnValue === '') {
    throw new Error('required field (' + dataType + ') missing');
  }
  return returnValue;
};
var toSql = function () {
  var inserts = [];
  fs.readFile(schemaFilename, 'utf-8', function (err, schema) {
    if (!err) {
      schema = JSON.parse(schema).properties;
      getPresets(presetsPath, function (err, inputData) {
        if (!err) {
          var columns = [];
          var inputJson = inputData;
          var values = [];
          var item;
          for (var category in inputJson) {
            for (var subcategory in inputJson[category].subcategories) {
              for (var key in inputJson[category].subcategories[subcategory].tags) {
                item = inputJson[category].subcategories[subcategory].tags[key];
                columns = ['superclass', 'class'];
                values = [
                  format({
                    'type': 'string',
                    'required': 'true'
                  }, category),
                  format({
                    'type': 'string',
                    'required': 'true'
                  }, subcategory)
                ];

                for (var column in schema) {
                  if (item[column] || item[column] === false || schema[column] && typeof schema[column] === 'string' && schema[column].split(' ').indexOf('key') > -1) {
                    columns.push(column);
                    values.push(format(schema[column], (item[column] === false ? false : item[column] || column)));
                  }
                }
                columns = columns.map(function (d) {
                  return '"' + d + '"';
                });
                inserts.push(['INSERT INTO', tableName, '(', columns.join(','), ') VALUES (', values.join(','), ');'].join(' '));
              }
            }
          }
          fs.writeFile(outputFilename, inserts.join('\n'), function (err) {
            if (err) return console.log(err);
            console.log('done!');
          });
        }
      });
    }
  });
};

toSql();
