const fs = require('fs'); // importa a biblioteca fs(FileSystem)

const msg = "Hello World! This is just for study...";

fs.writeFileSync('hello.txt', msg); // criarArquivo(path-do-arquivo, dado-do-arquivo);