(function() {
  "use strict";

  var gulp = require("gulp");
  var $ = require("gulp-load-plugins")({
    pattern: ["gulp-*", "gulp.*", "del"]
  });

  gulp.task("banner", function() {
    return gulp
      .src("src/*.js")
      .pipe($.banner("/* My Banner*/\n"))
      .pipe(gulp.dest("dist"));
  });

  gulp.task("default", gulp.series(["banner"]));
})();
