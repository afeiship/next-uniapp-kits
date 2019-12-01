'use strict';

var through = require('through2');
var gutil = require('gulp-util');
var PluginError = gutil.PluginError;
var PLUGIN_NAME = 'boilerplate-gulp-plugin';

function Plugin(inString) {
  if (!inString) {
    throw new PluginError(PLUGIN_NAME, 'Missing banner text!');
  }
  var buf = Buffer.from(inString);
  return through.obj(function(file, enc, cb) {
    if (file.isNull()) {
      cb(null, file);
    }
    if (file.isBuffer()) {
      file.contents = Buffer.concat([buf, file.contents]);
    }
    cb(null, file);
  });
}

module.exports = Plugin;
