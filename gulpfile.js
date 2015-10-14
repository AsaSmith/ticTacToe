var gulp = require('gulp')

gulp.task('myTask', function() {
  console.log('Running my task!');
});

var gulp = require('gulp'),
    gls = require('gulp-live-server');

    gulp.task('server', function() {
        var server = gls('.');
        server.start().then(function(result) {
            console.log('Server exited with result:', result);
        });
        return gulp.watch(['index.js', 'models/*.js', 'routes.js', 'routes/*.js'], function(file) {
          console.log(file);
            server.start.apply(server);
        });
    });


    gulp.task('default', ['server']);
