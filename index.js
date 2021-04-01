
// colocar "start":"nodemon"  no json em "scripts"
const express = require('express');
const app = express();

app.listen(3000, () =>{
    console.log('Servidor rodando!')
}); //ativar o servidor