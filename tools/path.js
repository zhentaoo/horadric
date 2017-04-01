const path = require('path');
const homeDir = require('os').homedir();

/*被创建的项目路径，当前工作目录*/
/* process.cwd() returns the current working directory*/
var seedRootPath = process.cwd();

exports.SEED_ROOT_PATH = seedRootPath;
exports.SEED_SRC = path.join(seedRootPath, 'src');
exports.SEED_SRC_VIEWS = path.join(seedRootPath,'src/views');
exports.SEED_SRC_VUEX = path.join(seedRootPath,'src/vuex');
exports.SEED_SRC_DIRECTIVE = path.join(seedRootPath,'src/directive');
exports.SEED_SRC_COMPONENTS = path.join(seedRootPath,'src/components');
exports.SEED_SRC_RESOURCE = path.join(seedRootPath,'src/resource');
exports.SEED_SRC_FILTER = path.join(seedRootPath,'src/filters');

/* cli文件夹路径，被执行的源文件所在路径*/
/* __dirname returns the directory name of the directory containing the JavaScript source code file */
var cliRootPath = path.join(__dirname, '..');

exports.CLI_ROOT_PATH = cliRootPath;
exports.CLI_VUE = path.join(cliRootPath, 'vue');
exports.CLI_TEM = path.join(cliRootPath, 'template');
exports.CLI_TEM_VIEWS = path.join(cliRootPath, 'template/views');
exports.CLI_TEM_VUEX = path.join(cliRootPath, 'template/vuex');
exports.CLI_TEM_DIRECTIVE = path.join(cliRootPath,'template/directive');
exports.CLI_TEM_COMPONENT = path.join(cliRootPath,'template/component');
exports.CLI_TEM_RESOURCE = path.join(cliRootPath,'template/resource');
exports.CLI_TEM_FILTER = path.join(cliRootPath,'template/filter');
