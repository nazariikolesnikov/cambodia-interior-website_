import replace from "gulp-replace";
import browserSync from "browser-sync";
import * as sass from "sass";
import gulpSass from "gulp-sass";
import rename from "gulp-rename";

export const plugins = {
    replace: replace,
    browsersync: browserSync,
    sass: gulpSass(sass),
    rename: rename,
}