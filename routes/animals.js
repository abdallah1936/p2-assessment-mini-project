const express = require("express");
const router = express.Router();
const db = require("../models");

// GET all animals
router.get("/", async (req, res) => {
  try {
    console.log(db)
    const animals = await db.animal.findAll();
    res.render("animals", { animals });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

// GET form to add a new animal
router.get("/new", (req, res) => {
  res.render("newAnimal");
});

// GET specific animal by id
router.get("/:id", async (req, res) => {
  try {
    const animal = await db.animal.findByPk(req.params.id);
    res.render("animalDetails", { animal });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

// POST a new animal
router.post("/", async (req, res) => {
  try {
    const newAnimal = await db.animal.create(req.body);
    res.status(201).json(newAnimal);
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

// PUT (update) a specific animal by id
router.put("/:id", async (req, res) => {
  try {
    const updatedAnimal = await db.animal.update(req.body, {
      where: {
        id: req.params.id,
      },
    });
    res.status(200).json(updatedAnimal);
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

// DELETE a specific animal by id
router.delete("/:id", async (req, res) => {
  try {
    const deletedAnimal = await db.animal.destroy({
      where: {
        id: req.params.id,
      },
    });
    res.status(200).json(deletedAnimal);
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

module.exports = router;
