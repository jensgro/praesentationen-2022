const gulp = require('gulp');

const config = {
  reveal: {
    js: "node_modules/reveal.js/dist/reveal.js"
  },
  all: {
    jsFolder: "_site/assets/js/",
    allAssets: "_site/assets/**/*.*",
    fontsSource: "src/assets/scss/fonts/**/*.*",
    fontsTarget: "_site/assets/css/fonts/",
    imagesSource: "src/assets/images",
    imagesTarget: "_site/assets/images",
    picsSource: "src/assets/pictures/**/*.*",
    picsTarget: "_site/pictures/",
    favico: "_site/favicon.ico"
  },
  a11y: {
    folder: "_site/content/a11y/",
    assets: "_site/content/a11y/assets/",
    picsSource: "_site/pictures/a11y/*.*",
    picsTarget: "_site/content/a11y/pictures/a11y/"
  },
  html: {
    folder: "_site/content/html/",
    assets: "_site/content/html/assets/",
    picsSource: "_site/pictures/frontend/*.*",
    picsTarget: "_site/content/html/pictures/frontend/"
  },
  css: {
    folder: "_site/content/css/",
    assets: "_site/content/css/assets/",
    picsSource: "_site/pictures/frontend/*.*",
    picsTarget: "_site/content/css/pictures/frontend/"
  }
};

gulp.task("cpRev", function(){
  return gulp.src(config.reveal.js)
             .pipe(gulp.dest(config.all.jsFolder))
});

gulp.task("cpFonts", function(){
  return gulp.src(config.all.fontsSource)
            .pipe(gulp.dest(config.all.fontsTarget));
});

gulp.task("cpImages", function(){
  return gulp.src(config.all.imagesSource)
            .pipe(gulp.dest(config.all.imagesTarget));
});

gulp.task("cpPics", function(){
  return gulp.src(config.all.picsSource)
            .pipe(gulp.dest(config.all.picsTarget));
});

// ================

gulp.task("cpA11yAssets", function(){
  return gulp.src(config.all.allAssets)
            .pipe(gulp.dest(config.a11y.assets));
});

gulp.task("cpA11yPics", function(){
  return gulp.src(config.a11y.picsSource)
             .pipe(gulp.dest(config.a11y.picsTarget))
});

gulp.task("cpA11yFav", function(){
  return gulp.src(config.all.favico)
            .pipe(gulp.dest(config.a11y.folder));
});
// ================

gulp.task("cpHTMLAssets", function(){
  return gulp.src(config.all.allAssets)
            .pipe(gulp.dest(config.html.assets));
});

gulp.task("cpHTMLPics", function(){
  return gulp.src(config.a11y.picsSource)
             .pipe(gulp.dest(config.html.picsTarget))
});

gulp.task("cpHTMLFav", function(){
  return gulp.src(config.all.favico)
            .pipe(gulp.dest(config.html.folder));
});
// ================

gulp.task("cpCSSAssets", function(){
  return gulp.src(config.all.allAssets)
            .pipe(gulp.dest(config.css.assets));
});

gulp.task("cpCSSPics", function(){
  return gulp.src(config.a11y.imagesource)
             .pipe(gulp.dest(config.css.imagetarget))
});

gulp.task("cpCSSFav", function(){
  return gulp.src(config.all.favico)
            .pipe(gulp.dest(config.css.folder));
});
// ================

exports.setup = gulp.series("cpRev", "cpFonts", "cpImages", "cpPics");
exports.a11y = gulp.series("cpA11yAssets", "cpA11yPics", "cpA11yFav");
exports.html = gulp.series("cpHTMLAssets", "cpHTMLPics", "cpHTMLFav");
exports.css = gulp.series("cpCSSAssets", "cpCSSPics", "cpCSSFav");

