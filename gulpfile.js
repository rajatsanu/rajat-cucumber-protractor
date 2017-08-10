'use strict';

var gulp = require('gulp');
var exec = require('child_process').exec;
var browserSync = require('browser-sync');
var protractor = require("gulp-protractor");
var replace = require('gulp-replace');
var reporter = require('gulp-protractor-cucumber-html-report');
var fs = require('fs-extra');
var gulp = require('gulp');
var ts = require('gulp-typescript');
var $ = require('gulp-load-plugins')({
    pattern: ['gulp-*', 'del']
});


gulp.task("runMyTest",function(){
    exec('protractor test1.conf.js',function(err, stdOut, stdErr){
        console.log('stdOut',stdOut);
        console.log('stdErr',stdErr);
    });
});

gulp.task('transpile', function () {
    return gulp.src('e2e/**/*.ts')
        .pipe(
            ts({
                "compilerOptions": {
                    "target": "es5",
                    "sourceMap": true,
                    "allowJs": false
                },
                "exclude": [
                    "node_modules/**/*.d.ts",
                    "node_modules/**/*.ts",
                    "node_modules/**/*.js"
                ]
            })
        )
        .pipe(gulp.dest('.temp'));
});

gulp.task('runTest',['transpile'],runProtractor);

gulp.task('run-protractor', runProtractor);

function runProtractor(done) {
    gulp.src('e2e')
        .pipe(protractor.protractor({
            configFile: 'test1.conf.js'
        }))
        .on('error', function (err) {
            throw err;
        })
        .on('end', function () {
            browserSync.exit();
            done();
        });
}


gulp.task('Generate-TestResult', function () {
    var resultFile = 'cucumber-test-results.json';
    var reportLocation = 'reports/';

    gulp.src(resultFile)
        .pipe(replace('][', ','))
        .pipe(reporter({
            dest: reportLocation
        }));

});

gulp.task('clean', function(done) {
    $.del(['.temp' + '*', 'reports*'], done);
});