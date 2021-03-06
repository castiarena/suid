'use strict';

var gulp    = require('gulp'),
    concat  = require('gulp-concat'),
    uglify  = require('gulp-uglify'),
    sass    = require('gulp-sass');

/**
 * Configuracion de tarea para JS
 *
 */

var src = {
    js:{
        dev:['bower_components/angular/angular.js','src/js/**/*.js'],
        prod: 'src/suid.js'
    },
    sass:  /** esta terea no tiene dev o prod, solo se ejecuta en dev **/
        [
            'bower_components/bootstrap-sass/assets/stylesheets/bootstrap/_grid.scss',
            'src/sass/**/*.scss'
        ]
};

gulp.task('js',function(){
   gulp.src(src.js.prod)
       .pipe(concat('app.js'))
       .pipe(uglify({mangle:false}))
       .pipe(gulp.dest('dest/js/'));
});

gulp.task('sass',function(){
   gulp.src(src.sass)
       .pipe(sass().on('error', sass.logError))
       .pipe(concat('suid-app.css'))
       .pipe(gulp.dest('src/css/'));
});


gulp.task('dev',function(){
    gulp.src(src.js.dev)
       .pipe(concat('suid.js'))
       .pipe(gulp.dest('src/js/'));

    gulp.task('sass');
});


