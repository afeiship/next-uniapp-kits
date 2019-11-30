# boilerplate-gulp-plugin
> boilerplate-gulp-plugin-description

## installation
```shell
npm install -D afeiship/boilerplate-gulp-plugin
```

## usage
```js
"use strict";

var gulp = require("gulp");
var boilerplateGulpPlugin = require('boilerplate-gulp-plugin');

gulp.task("task1", function() {
  return gulp
    .src("src/*.js")
    .pipe(boilerplateGulpPlugin("/* My Plugin*/\n"))
    .pipe(gulp.dest("dist"));
});

gulp.task("default", gulp.series(["task1"]));
```
