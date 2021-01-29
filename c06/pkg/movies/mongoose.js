const mongoose = require('mongoose');

const Movies = mongoose.model(
  'movies',
    {
      name: String,
      year: Number,
      genre:[String]
    },
    'movies'
);

const getAll = async () => {
  let data = await Movies.find({});
  return data;
};

const getOne = async (id) => {
  let data = await Movies.findOne({_id: id});
  return data;
};

const create = async (data) => {
  let movie = new Movies(data);
  await movie.save();
};

const update = async (id, data) => {
  await Movies.updateOne({_id: id}, data);
};
const updatePartial = async (id, data) => {
  await Movies.updateOne({_id: id}, data);
};
const remove = async (id) => {
  await Movies.deleteOne({_id: id});
};

module.exports = {
  getAll,
  getOne,
  update,
  create,
  remove,
  updatePartial
}