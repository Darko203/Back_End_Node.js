// const moviesData = require('../pkg/movies');
const moviesData = require('../pkg/movies/mongoose');

const getAllMovies = async (req, res) => {
  try {
    let data = await moviesData.getAll();
    res.status(200).send(data);
  } catch(err) {
    console.log(err);
    res.status(500).send('Internal server error');
  }
  
};
const getOneMovies = async (req, res) => {
  try {
    let data = await moviesData.getOne(req.params.id);
    if(data === null) {
      return res.status(404).send('Not Found');
    }
    res.status(200).send(data);
  } catch(err) {
    console.log(err);
    res.status(500).send('Internal server error');
  }
};

const createMovies = async (req, res) => {
  try {
    await moviesData.create(req.body);
    res.status(201).send(req.body);
  } catch(err) {
    console.log(err);
    res.status(500).send('Internal server error');
  }
};

const updateMovies = async (req, res) => {
  try {
    await moviesData.update(req.params.id, req.body);
    res.status(204).send(req.body);
  } catch(err) {
    console.log(err);
    res.status(500).send('Internal server error');
  }
};

const updateMoviesPartial = async (req, res) => {
  try {
    await moviesData.updatePartial(req.params.id, req.body);
    res.status(204).send(req.body);
  } catch(err) {
    console.log(err);
    res.status(500).send('Internal server error');
  }
};

const deleteMovies = async (req, res) => {
  try {
    await moviesData.remove(req.params.id);
    res.status(204).send(req.body);
  } catch(err) {
    console.log(err);
    res.status(500).send('Internal server error');
  }
};

module.exports = {
getAllMovies,
getOneMovies,
createMovies,
updateMovies,
updateMoviesPartial,
deleteMovies
}