var assert = require('assert');
var File = require('vinyl');
var banner = require('..');

describe('gulp-banner', function() {
  describe('Add a banner', function() {
    it('should prepend banner string', function(done) {
      // create the fake file
      var fakeFile = new File({
        contents: Buffer.from('abufferwiththiscontent')
      });

      // Create a prefixer plugin stream
      var myPlugin = banner('/*My Banner*/\n');

      // write the fake file to it
      myPlugin.write(fakeFile);

      // wait for the file to come back out
      myPlugin.once('data', function(file) {
        // make sure it came out the same way it went in
        assert(file.isBuffer());

        // check the contents
        assert.equal(file.contents.toString('utf8'), '/*My Banner*/\nabufferwiththiscontent');
        done();
      });
    });
  });
});
