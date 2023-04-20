const express = require('express');
const router = express.Router();
const animalController = require('../controllers/animalController');

router.get('/', (req, res) => {
  res.render('index');
});

router.get('/animals', animalController.getAllAnimals);
router.get('/animals/new', animalController.getNewAnimalForm);
router.post('/animals', animalController.addAnimal);
router.get('/animals/:id', animalController.getAnimalDetails);
router.get('/animals/:id/edit', animalController.getEditAnimalForm);
router.put('/animals/:id', animalController.updateAnimal);
router.delete('/animals/:id', animalController.deleteAnimal);

module.exports = router;
