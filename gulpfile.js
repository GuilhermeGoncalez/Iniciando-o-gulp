const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const sourcemaps = require ('gulp-sourcemaps');
const uglify = require ('gulp-uglify');
const obfuscate = require('gulp-obfuscate');
const imagemin = require('gulp-imagemin');

function comprimeImagens() {
    return gulp.src('./source/images/*')
        .pipe(imagemin())
        .pipe(gulp.dest('./build/images'));
}

function comprimeJavaScript() {
    return gulp.src('./source/scripts/*.js')
    .pipe(uglify())
    .pipe(obfuscate())
    .pipe(gulp.dest('./build/scripts'))
}

function compilaSass() {
    return gulp.src('./source/styles/main.scss')
        .pipe(sourcemaps.init())
        .pipe(sass({
            outputStyle: 'compressed'
        }))
        .pipe(sourcemaps.write('./maps'))
        .pipe(gulp.dest('./build/styles'));
}


exports.default = function(){
    gulp.watch('./source/styles/*.scss', {ignoreInitial: false }, gulp.series(compilaSass));
    gulp.watch('./source/scripts/*.js', {ignoreInitial: false }, gulp.series(comprimeJavaScript));
    gulp.watch('./source/images/*', {ignoreInitial: false }, gulp.series(comprimeImagens));
}
















/* https://lms.ebaconline.com.br/lesson/e5a48875-811b-42aa-b362-c75d53377d6b/forum 
ler o resumo do gian e a partir dele fazer me propio resumo da aula usando tambem, os links que le deixa abaixo
*/

/* 
parallel inicia todas as tarefas ao mesmo tempo 
series inicia uma tarefa assim que finalizar a outra 

Não serão todas as vezes que podemos usar o seriers para executar uma tarefa, vale ressaltar isso, provavelmente a explicacao fica mais para frente 

Detalhe, há uma diferença no tempo de processamento entre elas, a parellel é mais rápida nesse caso 

*/

