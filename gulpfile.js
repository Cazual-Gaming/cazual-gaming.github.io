const gulp = require('gulp');
const webserver = require('gulp-webserver');
const minHTML = require('gulp-htmlmin');
const cleanCSS = require('gulp-clean-css');
// const minify = require('gulp-minify');
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
      .pipe(minHTML({ collapseWhitespace: true, removeComments: true }))
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

async function other(){
	  gulp.src(["src/sitemap.xml","src/robots.txt"])
      .pipe(gulp.dest("./"));
}

exports.default = server;
exports.build = gulp.parallel(html, css, js, img, other);
// exports.build = gulp.series(clear, gulp.parallel(html, css, js, img));