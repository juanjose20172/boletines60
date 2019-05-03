gulp.task('server', function() {
    gulp.src('./')
      .pipe(server({
        livereload: true,
        directoryListing: true,
        open: true
      }));
  });