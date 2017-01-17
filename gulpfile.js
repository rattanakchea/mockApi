var gulp = require('gulp');

// takes in a callback so the engine knows when it'll be done
gulp.task('copy', function() {
    gulp.src('src/**/*.*')
        .pipe(gulp.dest('build'));
});

gulp.task('default', ['copy']);