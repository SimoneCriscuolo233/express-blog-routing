const express = require('express')
const posts = require('../posts.js')
const router = express.Router()

router.get('/', (req, res) => {
  res.json(posts)
})

router.get('/:id', (req, res) => {
  const postId = parseInt(req.params.id);
  const post = posts.find(elem => elem.id === postId);
  if (post) {
    res.json(post);
  } else {
    res.send('Post non trovato');
  }
})

router.post('/', (req, res) => {
  res.send(`Creazione nuovo post`)
})

router.put('/:id', (req, res) => {
  res.send(`Modifica totale del post con id ${req.params.id}`)
})
router.patch('/:id', (req, res) => {
  res.send(`Modifica parziale del post con id ${req.params.id}`)
})
router.delete('/:id', (req, res) => {
  res.send(`Cancellazione del post con id ${req.params.id}`)
})
module.exports = router;

