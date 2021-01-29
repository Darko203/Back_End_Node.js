const mongoose = require('mongoose');

const Books = mongoose.model(
    'books',
    {
      title: String,
      year: Number,
      author: String,
      page_count: Number,
      genres:[String]
    },
    'books'
);

const getAll = async () => {
  let book = await Books.find({});
  return book;
};

const getOne = async (id) => {
  let book = await Books.findOne({_id: id});
  return book;
};

const create = async (data) => {
  let book = new Books(data);
  await book.save();
};

const update = async (id, data) => {
  await Books.updateOne({_id: id}, data);
};
const updatePartial = async (id, data) => {
  await Books.updateOne({_id: id}, data);
};
const remove = async (id) => {
  await Books.deleteOne({_id: id});
};

module.exports = {
getAll,
getOne,
create,
update,
updatePartial,
remove
};