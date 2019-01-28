const chalk = require("chalk");
const kirbyDance = require("kirby-dance");

console.log(chalk.bgMagenta(kirbyDance(6)));

function hello(name) {
  console.log(chalk.bgYellow(`Hello, ${name}!`));
}

hello("world");
hello("Laura");
hello("Chloé");
hello("Abi");

console.log(chalk.red("ALERT! DANGER."));
