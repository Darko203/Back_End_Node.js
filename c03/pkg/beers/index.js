const mongoose = require('mongoose');

const Beers = mongoose.model(
    'beers',
    {
      name: String,
      introduced: Number,
      country : String,
      alcohol: Number,
      style: String
    },
    'beers'
);

const getAll = async () => {
  let beer = await Beers.find({});
  return beer;
};

const getOne = async (id) => {
  let beer = await Beers.findOne({_id: id});
  return beer;
};

const create = async (data) => {
  let beer = new Beers(data);
  await beer.save();
};

const update = async (id, data) => {
  await Beers.updateOne({_id: id}, data);
};
const updatePartial = async (id, data) => {
  await Beers.updateOne({_id: id}, data);
};
const remove = async (id) => {
  await Beers.deleteOne({_id: id});
};

module.exports = {
getAll,
getOne,
create,
update,
updatePartial,
remove
};