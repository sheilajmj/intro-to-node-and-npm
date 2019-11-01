const fs = require('fs');

const contents = fs.readdirSync('./animals');

const chalk = require('chalk-animation');

const animation = chalk.rainbow(contents.join('/n')
);

debugger;
