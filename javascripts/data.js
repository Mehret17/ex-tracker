const loadEx = require('./ex');
const loadLocation = require('./locations');
const dom = require('./dom');

const whenExLoad = (data) => {
  console.log('data', data);
  $('#exContainer').append(dom.writeEx(data.ex));
};

const whenLocationsLoad = (data) => {
  console.log('data', data);
  $('#locationContainer').append(dom.writeLocation(data.locations));
};

const errorFunction = (error) => {
  console.log('error!', error);
};

const initializer = () => {
  loadEx(whenExLoad, errorFunction);
  loadLocation(whenLocationsLoad, errorFunction);
};

module.exports = initializer;
