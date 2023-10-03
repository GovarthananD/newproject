const express = import ('express');
const Movies = import('../models/movies-model.js');
const router = express.Router();

router.get('/movies', ()=>{});
router.post('/movies', ()=>{});
router.put('/movies', ()=>{});
router.delete('/movies', ()=>{});

module.exports = router;