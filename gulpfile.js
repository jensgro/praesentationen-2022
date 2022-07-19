const gulp = require('gulp');

const config = {
  reveal: {
    js: "node_modules/reveal.js/dist/reveal.js"
  },
  all: {
    jsFolder: "_site/assets/js/",
    allJS: "_site/assets/js/*.*",
    cssFolder: "_site/assets/css/",
    allCSS: "_site/assets/css/*.*",
    assets: "_site/assets/",
    allAssets: "_site/assets/**/*.*",
    presentationFolder: "_site/content/"
  },
  a11y: {
    folder: "_site/content/a11y/",
    assets: "_site/content/a11y/assets/"
  },
  html: {
    folder: "_site/content/html/",
    assets: "_site/content/html/assets/"
  },
  css: {
    folder: "_site/content/css/",
    assets: "_site/content/css/assets/"
  }
}

gulp.task("cpRev", function(){
  return gulp.src(config.reveal.js)
             .pipe(gulp.dest(config.all.jsFolder))
});

gulp.task("cpA11y", function(){
  return gulp.src(config.all.allAssets)
            .pipe(gulp.dest(config.a11y.assets));
});

gulp.task("cpHTML", function(){
  return gulp.src(config.all.allAssets)
            .pipe(gulp.dest(config.html.assets));
});

gulp.task("cpCSS", function(){
  return gulp.src(config.all.allAssets)
            .pipe(gulp.dest(config.css.assets));
});

