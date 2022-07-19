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
    fontsSource: "src/assets/scss/fonts/**/*.*",
    fontsTarget: "_site/assets/css/fonts/",
    presentationFolder: "_site/content/",
    images: "_site/pictures/"
  },
  a11y: {
    folder: "_site/content/a11y/",
    assets: "_site/content/a11y/assets/",
    imagesource: "_site/pictures/a11y/*.*",
    imagetarget: "_site/content/a11y/pictures/a11y/"
  },
  html: {
    folder: "_site/content/html/",
    assets: "_site/content/html/assets/",
    images: "_site/pictures/frontend"
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

gulp.task("copyFonts", function(){
  return gulp.src(config.all.fontsSource)
            .pipe(gulp.dest(config.all.fontsTarget));
});

gulp.task("cpA11y", function(){
  return gulp.src(config.all.allAssets)
            .pipe(gulp.dest(config.a11y.assets));
});

gulp.task("cpA11yImages", function(){
  return gulp.src(config.a11y.imagesource)
             .pipe(gulp.dest(config.a11y.imagetarget))
})

gulp.task("cpHTML", function(){
  return gulp.src(config.all.allAssets)
            .pipe(gulp.dest(config.html.assets));
});

gulp.task("cpCSS", function(){
  return gulp.src(config.all.allAssets)
            .pipe(gulp.dest(config.css.assets));
});


