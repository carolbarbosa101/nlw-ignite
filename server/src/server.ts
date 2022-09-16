import express from 'express';
const app = express();
//localhost:3333/ads

app.get('/games', (request, response) => {
  return response.json([]);
});

app.post('/ads', (request, response) => {
  return response.status(201).json([]);
});

app.get('/games/:id/ads', (request, response) => {
  const gameId = request.params.id;

  return response.json([
    { id: 1, name: 'Anuncio 1'},
    { id: 2, name: 'Anuncio 2'},
    { id: 3, name: 'Anuncio 3'},
    { id: 4, name: 'Anuncio 4'},
    { id: 5, name: 'Anuncio 5'},
  ])
})

app.get('/ads/:id/discord', (request, response) => {
  const gameId = request.params.id;

  return response.json([
    { id: 1, name: 'Anuncio 1'},
    { id: 2, name: 'Anuncio 2'},
    { id: 3, name: 'Anuncio 3'},
    { id: 4, name: 'Anuncio 4'},
    { id: 5, name: 'Anuncio 5'},
  ])
})
app.listen(3333)