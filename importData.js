const fs = require('fs');
const path = require('path');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const Tour = require('./models/tourModels');

dotenv.config({ path: 'config.env' });
const pathTour = path.join(process.cwd(), 'dev-data/data/tours.json');
const allTour = JSON.parse(fs.readFileSync(pathTour));

const deleteData = async () => {
  try {
    await Tour.deleteMany();
    console.log('Delete data successful');
  } catch (err) {
    console.log(err);
  }
};

const importData = async () => {
  try {
    await Tour.create(allTour);
    console.log('Import data successful');
  } catch (err) {
    console.log(err);
  }
};
// deleteData();
importData();

const DB = process.env.DATABASE.replace(
  '<PASSWORD>',
  process.env.DATABASE_PASSWORD
);
mongoose
  .connect(DB, {
    useNewUrlParser: true,
    useFindAndModify: false,
    useCreateIndex: true,
    useUnifiedTopology: true,
  })
  .then((con) => {
    console.log(' DB connect successful');
  });
