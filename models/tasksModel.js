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

module.exports = {
  create,
  getAll,
};
