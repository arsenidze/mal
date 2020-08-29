const readline = require('readline');
    
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
    prompt: require("os").userInfo().username + "> "
  });
  
main() 
function READ(line) {
    return line
}

function EVAL(line) {
   return line 
}

function PRINT(line) {
    console.log(line)
}

function rep(line) {
    readedLine = READ(line)
    evaluatedLine = EVAL(readedLine)
    PRINT(evaluatedLine)
}

function main() {
    rl.prompt();
    rl.on('line', (line) => {
        rep(line)
        rl.prompt();
    }).on('close', () => {
        console.log('Have a great day!');
        process.exit(0);
    }); 
}