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
      .pipe(gulp.dest("./"));
}

async function css(){
   gulp.src('src/assets/css/*.css')
     .pipe(cleanCSS({compatibility: 'ie8'}))
     .pipe(gulp.dest('assets/css'));
}

async function js(){
   gulp.src('src/assets/js/**/*.js')
     .pipe(gulp.dest('assets/js'));
}

async function img(){
	gulp.src('src/assets/img/**/*')
	  .pipe(gulp.dest('assets/img'));
}

async function sitemap(){
	  gulp.src("src/sitemap.xml")
      .pipe(gulp.dest("./"));
}

exports.default = server;
exports.build = gulp.parallel(html, css, js, img, sitemap);
// exports.build = gulp.series(clear, gulp.parallel(html, css, js, img));