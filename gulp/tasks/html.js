import fileInclude from "gulp-file-include";
import pug from "gulp-pug";

export const html = ({ gulp, path }) => {
    return gulp.src(path.src.html)
        .pipe(pug({
            pretty: true,
            verbose: true,
        }))
        .pipe(fileInclude())
        .pipe(gulp.dest(path.build.html));
}