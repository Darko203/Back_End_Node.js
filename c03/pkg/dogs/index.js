const mongoose = require('mongoose');

const Dogs = mongoose.model(
    'dogs',
    {
        breed: String,
        lifespan: Number,
        temperament: [String],
        colors: [String],
        weight: {
            male: Number,
            female: Number
        },
        height: {
            male: Number,
            female: Number
        }
    },
    'dogs'
);

const getAll = async () => {
    let dog = await Dogs.find({});
    return dog;
};

const getOne = async (id) => {
    let dog = await Dogs.findOne({_id: id});
    return dog;
};

const create = async (data) => {
    let dog = new Dogs(data);
    await dog.save();
};

const update = async (id, data) => {
    await Dogs.updateOne({_id: id, data});
};
const updatePartial = async (id, data) => {
    await Dogs.updateOne({_id: id, data});
};
const remove = async (id) => {
    await Dogs.deleteOne({_id: id})
};

module.exports = {
getAll,
getOne,
create,
update,
updatePartial,
remove
};