const { src, dest } = require('gulp');

function copyReveal() {
  return src('node_modules/reveal.js/dist/reveal.js')
    .pipe(dest('_site/js'));
}

exports.copyReveal = copyReveal;