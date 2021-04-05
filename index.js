
// colocar "start":"nodemon"  no json em "scripts"
const { response } = require('express');
const express = require('express');
const { apararUnhasPet, adicionarPet } = require('./petshop');
const petshop = require('./petshop')
const app = express();

app.use(express.json())


app.listen(3000, () =>{
    console.log('Servidor rodando!')
}); //ativar o servidor


app.get('/pets', (req, res) => {
    return res.send(petshop.listarPets());
});

app.post('/novoPet', (req,res) =>{
    const pet = req.body
    return res.json(petshop.adicionarPet(pet))
})

app.get('/pets/:nome', (req, res) => {
    const { nome } = req.params;
    const petBuscado = petshop.buscarPet(nome);

    if(!petBuscado){
        return res.status(404).json({erro:'Animal não encontrado'});
    }

    return response.json(petBuscado);

});
