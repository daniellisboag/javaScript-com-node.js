const fs = require('fs');

const caminhoArquivo = process.argv;
const link = caminhoArquivo[2];

fs.readFile(link, 'utf-8', (erro, texto) => {
   verificaPalavrasDuplicadas(texto);
});


// Criar um array com as palavras.
// Contar as ocorrências.
// Montar um objeto com o resultado.

/* {
   'web': 5,
   'computador': 4
} */

function verificaPalavrasDuplicadas(texto) {
   const listaPalavras = texto.split(' ');
   const resultado = {};
   // Objeto[propriedade] = valor;
   listaPalavras.forEach(palavra => {
      resultado[palavra] = (resultado[palavra] || 0) + 1;
   });
   console.log(resultado);
}