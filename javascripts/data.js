const loadEx = require('./ex');
const loadLocation = require('./locations');
const dom = require('./dom');
const allEvents = require ('./events');

const whenExLoad = (data) => {
  console.log('data', data);
  $('#exContainer').append(dom.writeEx(data.ex));
  allEvents();
};

const whenLocationsLoad = (data) => {
  console.log('data', data);
  $('#locationContainer').html(dom.writeLocation(data.locations));
};

const errorFunction = (error) => {
  console.log('error!', error);
};

const initializer = () => {
  loadEx(whenExLoad, errorFunction);
  loadLocation(whenLocationsLoad, errorFunction);
};

module.exports = initializer;
