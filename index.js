const program = require('commander');
// 将 -v 和 –version 添加到命令中
program.version('1.0.0', '-v, --version')
  .command('init <name>')
  .action((name) => {
    console.log(name);
  });
program.parse(process.argv);