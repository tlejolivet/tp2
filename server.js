const express = require('express')
const app = express()
const port = 3000
const digi = "Digital Campus Rennes"
const time = "Vendredi 31 janvier 2020"

app.get('/', (request, response) => {
  response.send('Requête reçue...')
})

app.get('/hello/:name', (request, response) => {
  response.send('Hello, '+request.params.name+'!');
})

app.listen(port, (err) => {
  if (err) {
    return console.log('Erreur du serveur : ', err)
  }

  console.log('Le serveur écoute sur le port '+port+'\nRendez vous sur http://localhost:'+port);


console.log('Vous êtes à '+digi+', Bienvenue\nNous sommes le '+time+'');
})
