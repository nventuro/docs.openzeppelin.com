;(function () {
  'use strict'

  var hljs = require('highlight.js/lib/highlight');
  hljs.registerLanguage('javascript', require('highlight.js/lib/languages/javascript'));
  hljs.registerLanguage('typescript', require('highlight.js/lib/languages/typescript'));
  hljs.registerLanguage('json', require('highlight.js/lib/languages/json'));
  hljs.registerLanguage('diff', require('highlight.js/lib/languages/diff'));
  hljs.registerLanguage('python', require('highlight.js/lib/languages/python'));
  hljs.registerLanguage('shell', require('highlight.js/lib/languages/shell'));
  require('highlightjs-solidity')(hljs);
  hljs.initHighlightingOnLoad();
})();
