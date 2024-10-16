
const { Toy } = require('../models');

const getToys = async (req, res) => {
  try {
    const toys = await Toy.findAll();
    res.json(toys);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching toys' });
  }
};

const deleteToy = async (req, res) => {
  try {
    const toyId = req.params.id;
    const toy = await Toy.findByPk(toyId);

    if (!toy) {
      return res.status(404).json({ message: 'Toy not found' });
    }

    await toy.destroy();
    res.json({ message: 'Toy deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Error deleting toy' });
  }
};

// Add a new toy
const addToy = async (req, res) => {
  try {
    const { name, description, price, image } = req.body;

    // Create a new toy using the Toy model
    const newToy = await Toy.create({ name, description, price, image });
    res.status(201).json(newToy); // Respond with the created toy
  } catch (error) {
    res.status(500).json({ message: 'Error adding toy' });
  }
};

const updateToy = async (req, res) => {
  try {
    const toyId = req.params.id;
    const { name, description, price, image } = req.body;
    const toy = await Toy.findByPk(toyId);

    if (!toy) {
      return res.status(404).json({ message: 'Toy not found' });
    }

    // Update toy attributes
    toy.name = name;
    toy.description = description;
    toy.price = price;
    toy.image = image;

    await toy.save();
    res.json({ message: 'Toy updated successfully', toy });
  } catch (error) {
    res.status(500).json({ message: 'Error updating toy' });
  }
};

module.exports = {
  getToys,
  deleteToy,
  addToy,
  updateToy
};
