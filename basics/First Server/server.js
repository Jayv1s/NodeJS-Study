const http = require('http'); // TIPs: é uma boa pratica nomear o import com o nome do modulo importado.
                              // Para modulos globais não é necessario passar o caminho (../folder/file).

function Listener(request, response) {
    console.log(request);
};

const server = http.createServer(Listener);// Essa função retorna um "Server", por conta disso, é necessario criar uma variável para receber esse retorno.
                            // Listener é meu "RequestListener", ou seja, é uma função que será chamada em toda request que houver no server.

server.listen(8080); // é uma função do http que faz com que o server "fique ouvindo" novas requisições, sem a necessidade de ter que chamar a função "server" manualmente.



//OUTRAS FORMAS DE CRIAR O SERVER COM LISTENER:
/*

Arrow Function:
http.createServer((request, response) => {

});
Normal Function:
http.createServer(function(request, response){

});

*/