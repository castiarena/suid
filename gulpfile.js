var gulp = require('gulp'),
    concat = require('gulp-concat'),
    uglify = require('gulp-uglify');

/**
 * Configuracion de tarea para JS
 *
 */

var src = {
    js:{
        dev:['bower_components/angular/angular.js','src/js/**/*.js'],
        prod: ['src/suid.js']
    },
    sass: []
};

gulp.task('js',function(){
   gulp.src(src.js.prod)
       .pipe(concat('app.js'))
       .pipe(uglify({mangle:false}))
       .pipe(gulp.dest('dest/js/'));
});

gulp.task('dev',function(){
   gulp.src(src.js.dev)
       .pipe(concat('suid.js'))
       .pipe(gulp.dest('src/js/'));
});


