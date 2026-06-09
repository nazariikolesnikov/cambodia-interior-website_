export const copy = ({ gulp, path }) => {
    return gulp.src(path.src.files)
        .pipe(gulp.dest(path.build.files));
}