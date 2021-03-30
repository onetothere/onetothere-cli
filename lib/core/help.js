const program = require('commander');

const helpOptions = () => {
  program.option('-w --onetothere', 'a onetothere options');

  program.option('-s --src <src>', 'a source folder');
  program.option('-d --dest <dest>', 'a destination folder, 例如: -d src/pages, 错误/src/pages');
  program.option('-f --framework <framework>', 'your framework name');

  program.on('--help', function() {
    console.log("");
    console.log("usage");
    console.log("   onetothere -v");
    console.log("   onetothere -version");
  })
};

module.exports = helpOptions;