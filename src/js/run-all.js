(function() {
  'use strict';
  const glob = require('glob');
    const execSync = require('child_process').execSync;
    const filePatterns = 'dist/**/index.js';
  glob(filePatterns, (error, fileList) => {
    if(error) {
      console.error(error);
      process.exit(1);
    }
    fileList.forEach((fileName) => {
      console.log('Running file: ', fileName);
      const result = execSync(`node ${fileName}`);
      console.log(result.toString());
    });
  });
}());


// original:
// 'dist/**/!(*.spec).js'
