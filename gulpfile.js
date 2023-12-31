var gulp = require('gulp');
var webserver = require('gulp-webserver');

function server(){
   gulp.src('src').pipe(webserver({
        livereload: true,
        open: true,
        port: 3000
   }));  
}

exports.default = server;