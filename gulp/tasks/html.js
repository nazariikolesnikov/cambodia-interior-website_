import fileInclude from "gulp-file-include";
import pug from "gulp-pug";

export const html = () => {
    return app.gulp.src(app.path.src.html)
        .pipe(pug({
            pretty: true,
            verbose: true,
        }))
        .pipe(fileInclude())
        .pipe(app.gulp.dest(app.path.build.html));
}
