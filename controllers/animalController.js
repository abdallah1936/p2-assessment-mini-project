const db = require('../models');

exports.getAllAnimals = async (req, res) => {
  try {
    // console.log(db)
    const animals = await db.animal.findAll();
    console.log(animals)
    res.render('animals', { animals });
  } catch (err) {
    console.log(err)
    res.status(500).send(err.message);
  }
};

exports.getNewAnimalForm = (req, res) => {
  res.render('newAnimal');
};

exports.addAnimal = async (req, res) => {
  try {
    await db.animal.create(req.body);
    res.redirect('/animals');
  } catch (err) {
    res.status(500).send(err.message);
  }
};

exports.getAnimalDetails = async (req, res) => {
  try {
    const animal = await db.animal.findByPk(req.params.id);
    res.render('animalDetails', { animal });
  } catch (err) {
    res.status(500).send(err.message);
  }
};

exports.getEditAnimalForm = async (req, res) => {
  try {
    const animal = await db.animal.findByPk(req.params.id);
    res.render('editAnimal', { animal });
  } catch (err) {
    res.status(500).send(err.message);
  }
};

exports.updateAnimal = async (req, res) => {
  try {
    await db.animal.update(req.body, { where: { id: req.params.id } });
    res.redirect(`/animals/${req.params.id}`);
  } catch (err) {
    res.status(500).send(err.message);
  }
};

exports.deleteAnimal = async (req, res) => {
  try {
    await db.animal.destroy({ where: { id: req.params.id } });
    res.redirect('/animals');
  } catch (err) {
    res.status(500).send(err.message);
  }
};
