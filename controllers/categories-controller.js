const Category = require('../models/Category');

// TODO try change this to async/await, and try/catch
const index = (req, res) => {
  Category.find()
    .then((categories) => res.send(categories))
    .catch((err) => res.status(404).send(err));
}

// TODO try change this to async/await, and try/catch
const create = (req, res) => {
  const {
    title,
    description
  } = req.body;
  
  Category.create({title, description})
    .then((newCategory) => res.send(newCategory))
    .catch((err) => res.status(400).send(err));
}

module.exports = {
  index,
  create
}
