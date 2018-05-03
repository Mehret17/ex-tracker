const loadEx = require('./ex');
const loadLocation = require('./locations');

const whenExLoad = (data) => {
  console.log('data', data);
};

const whenLocationsLoad = (data) => {
  console.log('data', data);
};

const errorFunction = (error) => {
  console.log('error!', error);
};

const initializer = () => {
  loadEx(whenExLoad, errorFunction);
  loadLocation(whenLocationsLoad, errorFunction);
};

module.exports = initializer;
