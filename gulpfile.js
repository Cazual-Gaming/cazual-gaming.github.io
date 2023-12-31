const gulp = require('gulp');
const webserver = require('gulp-webserver');
const minHTML = require('gulp-htmlmin');
const cleanCSS = require('gulp-clean-css');
// const uglyfly = require('gulp-uglyfly');
const clean = require('gulp-clean');
// const imagemin = require('gulp-imagemin');


 
async function clear(){
   gulp.src('dist', {read: false}).pipe(clean());
}

async function server(){
   gulp.src('src').pipe(webserver({
        livereload: true,
        open: true,
        port: 3000
   }));  
}

async function html(){
   gulp.src("src/**/*.html")
      .pipe(minHTML({ collapseWhitespace: true }))
      .pipe(gulp.dest("dist"));
}

async function css(){
   gulp.src('src/css/*.css')
     .pipe(cleanCSS({compatibility: 'ie8'}))
     .pipe(gulp.dest('dist/css'));
}

async function js(){
   gulp.src('src/js/*.js')
     .pipe(gulp.dest('dist/js'));
}

async function img(){
	gulp.src('src/img/**/*')
	  .pipe(gulp.dest('dist/img'));
}

exports.default = server;
exports.build = gulp.parallel(html, css, js, img);
// exports.build = gulp.series(clear, gulp.parallel(html, css, js, img));