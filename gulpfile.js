const { src, dest, watch } = require("gulp");
const sass = require("gulp-sass")(require("sass"));
const plumber = require('gulp-plumber');

function css(done) {
  src("src/scss/**/*.scss") // Identificar el archivo SASS
    .pipe(plumber())
    .pipe(sass()) // Compilarlo
    .pipe(dest("build/css")); // Almacernalo en el disco duro

  done(); // Callback que avisa a gulp cuando llegamos al final de la ejecución
}

function dev(done) {
  watch("src/scss/**/*.scss", css);

  done();
}

exports.css = css;
exports.dev = dev;
