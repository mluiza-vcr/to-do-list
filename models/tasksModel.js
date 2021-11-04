const { ObjectId } = require('mongodb');
const connection = require('./connection');

const date = new Date().toLocaleDateString();

const create = async ({ name, status }) => {
  const db = await connection();
  const inserted = await db.collection('tasks').insertOne({ name, date, status });
  return {
    _id: inserted.insertedId, name, date, status,
  };
};

const getAll = async () => {
  const db = await connection();
  const all = await db.collection('tasks').find().toArray();
  return all;
};

const deleteById = async (id) => {
  if (!ObjectId.isValid(id)) return null;
  const db = await connection();
  await db.collection('tasks').deleteOne({ _id: ObjectId(id) });
};

module.exports = {
  create,
  getAll,
  deleteById,
};
