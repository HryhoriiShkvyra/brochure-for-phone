const gulp = require("gulp");
const cleanCSS = require("gulp-clean-css");
const htmlmin = require("gulp-htmlmin");

gulp.task("minify-css", () => {
  return gulp.src("src/*.css").pipe(cleanCSS()).pipe(gulp.dest("dist"));
});

gulp.task("minify-html", () => {
  return gulp
    .src("src/*.html")
    .pipe(htmlmin({ collapseWhitespace: true }))
    .pipe(gulp.dest("dist"));
});

gulp.task("build", gulp.parallel("minify-css", "minify-html"));
