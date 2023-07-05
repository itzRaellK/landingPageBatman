// Antes de utilizar o Gulp, devemos importar todas as dependências que serão utilizadas
const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const imagemin = require('gulp-imagemin');

// Função que recupera os arquivos SCSS na pasta STYLES e comprime para melhor desempenho
function styles() {
    return gulp.src('./src/styles/*.scss')
        .pipe(sass({outputStyle: 'compressed'}))
        .pipe(gulp.dest('./dist/css'));
}

function images() {
    return gulp.src('./src/images/**/*')
        .pipe(imagemin())
        .pipe(gulp.dest('./dist/images'));
}

// Abaixo estão os EXPORTS necessários para utilizar GULP de forma automatizada
exports.default = gulp.parallel(styles, images);

exports.watch = function() {
    gulp.watch('./src/styles/*.scss', gulp.parallel(styles));
}