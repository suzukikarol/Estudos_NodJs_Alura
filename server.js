// const express = require('express');
// //importando o modulo express

// const app = express();
// //recebemos  um obj que podemos configurar do modulo express

const app = require('./src/config/custom-express');
//encapsulando o express

app.listen(3000, function () {
    console.log(`Servidor rodando na porta 3000`);
});


// const http = require('http');
//require é uma função que já existe no node.
//trazendo modulo http que já existe no node tbm
//nessa linha importamos o modulo de http do node para podermos criar requisições que usem ela.

// const servidor = http.createServer(function (req, res) {
//     let html = '';

//     if (req.url == '/') {
//         html =
//             `
//             <html>
//                 <head>
//                     <meta charset="utf-8">
//                 </head>
//                 <body>
//                     <h1> Casa do Código </h1>
//                 </body>
//             </html>
//             `
//     } else if (req.url == '/livros') {
//         html =
//             `
//         <html>
//         <head>
//             <meta charset="utf-8">
//         </head>
//         <body>
//             <h1> Listagem de Livros </h1>
//         </body>
//     </html>
//         `
//     }
//     //pode ser adicionado outros url para cada tipo de requisicao
//     res.end(html);
// });
// //criando um server com uma resposta de um html simples sempre que houver uma requisição

// servidor.listen(3000);
// //pedindo que o server escute a porta 3000

