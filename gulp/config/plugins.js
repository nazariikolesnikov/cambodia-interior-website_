import replace from "gulp-replace";
import browserSync from "browser-sync";
import * as sass from 'sass';
import gulpSass from "gulp-sass";
import rename from "gulp-rename";
import plumber from "gulp-plumber";
import notify from "gulp-notify";

export const plugins = {
    replace: replace,
    browsersync: browserSync,
    sass: gulpSass(sass),
    rename: rename,
    plumber: plumber,
    notify: notify,
}