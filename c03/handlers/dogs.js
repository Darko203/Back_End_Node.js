const dogsData = require('../pkg/dogs');

const getAllDogs = async (req, res) => {
    try {
        let data = await dogsData.getAll();
        res.status(200).send(data);
    } catch(err) {
        console.log(err);
        res.status(500).send('Internal server error');
    }
};

const getOneDog = async (req, res) => {
    try {
        let data = await dogsData.getOne(req.params.id);
        if(data === null) {
            return res.status(404).send('Not Found');
        }
        res.status(200).send(data);
    } catch(err) {
        console.log(err);
        res.status(500).send('Internal server error');
    }
};

const createDog = async (req, res) => {
    try {
        await dogsData.create(req.body);
        res.status(201).send(req.body);
    } catch(err) {
        console.log(err);
        res.status(500).send('Internal server error');
    }
};
const updateDog = async (req, res) => {
    try {
        await dogsData.update(req.params.id, req.body);
        res.status(204).send(req.body);
    } catch(err) {
        console.log(err);
        res.status(500).send('Internal server error');
    }
};

const updateDogPartial = async (req, res) => {
    try {
        await dogsData.updatePartial(req.params.id, req.body);
        res.status(204).send(req.body);
    } catch(err) {
        console.log(err);
        res.status(500).send('Internal server error');
    }
};
const deleteDog = async (req, res) => {
    try {
        await dogsData.remove(req.params.id);
        res.status(204).send(req.body);
    } catch(err) {
        console.log(err);
        res.status(500).send('Internal server error');
    }
};

module.exports = {
getAllDogs,
getOneDog,
createDog,
updateDog,
updateDogPartial,
deleteDog
}