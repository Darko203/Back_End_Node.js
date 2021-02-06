const mongoose = require('mongoose');

const Users = mongoose.model(
    'users',
    {
      email: String,
      password: String
    },
    'users'
);

const getAll = async () => {
  let users = await Users.find({});
  return users;
};

const getOne = async (id) => {
  let users = await Users.findOne({_id: id});
  return users;
};

const getOneByEmail = async (email) => {
  let users = await Users.findOne({email});
  return users;
};

const create = async (data) => {
  let users = new Users(data);
  return await users.save();
};

const update = async (id, data) => {
  return await Users.updateOne({_id: id}, data);
};
const updatePartial = async (id, data) => {
  return await Users.updateOne({_id: id}, data);
};
const remove = async (id) => {
  return await Users.deleteOne({_id: id});
};

module.exports = {
getAll,
getOne,
create,
update,
updatePartial,
remove,
getOneByEmail
};