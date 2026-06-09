import * as nodePath from 'path';

const rootFolder = nodePath.basename(nodePath.resolve());
const buildFolder = './dist';
const srcFolder = './src';

export const path = {
    build: {
        js: `${srcFolder}/js/`,
        scss: `${buildFolder}/css/`,
        html: `${buildFolder}/`,
        files: `${buildFolder}/files/`,
    },
    src: {
        js: `${srcFolder}/files/js/*.js`,
        images: `${srcFolder}/files/assets/img/**/*.{jpg,jpeg,png,gif,webp}`,
        svg: `${srcFolder}/files/assets/img/**/*.svg`,
        scss: `${srcFolder}/files/scss/*.scss`,
        html: `${srcFolder}/files/html/*.html`,
        files: `${srcFolder}/files/**/*.*`, 
    },
    watch: {
        js: `${srcFolder}/js/**/*.js`,
        scss: `${srcFolder}/scss/**/*.scss`,
        html: `${srcFolder}/**/*.html`,
        images: `${srcFolder}/img/**/*.{jpg,jpeg,png,svg,gif,ico,webp}`,
        files: `${srcFolder}/files/**/*.*`,
    },
    clean: buildFolder,
    buildFolder: buildFolder,
    srcFolder: srcFolder,
    rootFolder: rootFolder,
    ftp: ``,
};