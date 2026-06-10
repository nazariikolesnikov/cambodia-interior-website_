import webp from "gulp-webp";
import imagemin from "gulp-imagemin";

export const images = async () => {
    const makeWebp = new Promise((resolve, reject) => {
        app.gulp.src(app.path.src.images, { encoding: false })
            .pipe(app.plugins.plumber(
                app.plugins.notify.onError({
                    title: "IMAGES",
                    message: "Error: <%= error.message %>"
                })
            ))
            .pipe(app.plugins.newer(app.path.build.images))
            .pipe(webp())
            .pipe(app.gulp.dest(app.path.build.images))
            .on('end', resolve)
            .on('error', reject);
    });

    const optimizeImages = new Promise((resolve, reject) => {
        app.gulp.src(app.path.src.images, { encoding: false })
            .pipe(app.plugins.newer(app.path.build.images))
            .pipe(imagemin({
                progressive: true,
                svgoPlugins: [{ removeViewBox: false }],
                interlaced: true,
                optimizationLevel: 3,
            }))
            .pipe(app.gulp.dest(app.path.build.images))
            .on('end', resolve)
            .on('error', reject);
    });

    const copySvg = new Promise((resolve, reject) => {
        app.gulp.src(app.path.src.svg, { encoding: false })
            .pipe(app.gulp.dest(app.path.build.images))
            .on('end', resolve)
            .on('error', reject);
    });

    await Promise.all([makeWebp, optimizeImages, copySvg]);
    
    app.plugins.browsersync.stream();
};