const beerData = require('../pkg/beers');

const getAllBeers = async (req, res) => {
    try {
        let data = await beerData.getAll();
        res.status(200).send(data);
    } catch(err) {
        console.log(err);
        res.status(500).send('Internal server error');
    }
};

const getOneBeer = async (req, res) => {
    try {
        let data = await beerData.getOne(req.params.id);
        if(data === null) {
            return res.status(404).send('Not Found');
        }
        res.status(200).send(data);
    } catch(err) {
        console.log(err);
        res.status(500).send('Internal server error');
    }
};

const createBeer = async (req, res) => {
    try {
        await beerData.create(req.body);
        res.status(201).send(req.body);
    } catch(err) {
        console.log(err);
        res.status(500).send('Internal server error');
    }
};

const updateBeer = async (req, res) => {
    try {
        await beerData.update(req.params.id, req.body);
        res.status(204).send(req.body);
    } catch(err) {
        console.log(err);
        res.status(500).send('Internal server error');
    }
};

const updateBeerPartial = async (req, res) => {
    try {
        await beerData.updatePartial(req.params.id, req.body);
        res.status(204).send(req.body);
    } catch(err) {
        console.log(err);
        res.status(500).send('Internal server error');
    }
};

const deleteBeer = async (req, res) => {
    try {
        await beerData.remove(req.params.id);
        res.status(204).send(req.body);
    } catch(err) {
        console.log(err);
        res.status(500).send('Internal server error');
    }
};

module.exports = {
getAllBeers,
getOneBeer,
createBeer,
updateBeer,
updateBeerPartial,
deleteBeer
};