// const loadEx = require('./ex');
// const loadLocation = require('./locations');
const dom = require('./dom');
// const allEvents = require ('./events');

// const whenExLoad = (data) => {
//   console.log('data', data);
//   $('#exContainer').append(dom.writeEx(data.ex));
//   allEvents();
// };

// const whenLocationsLoad = (data) => {
//   console.log('data', data);
//   $('#locationContainer').html(dom.writeLocation(data.locations));
// };

// const errorFunction = (error) => {
//   console.log('error!', error);
// };

// const initializer = () => {
//   loadEx(whenExLoad, errorFunction);
//   loadLocation(whenLocationsLoad, errorFunction);
// };

const exJSON = () => {
  return new Promise((resolve, reject) => {
    $.get('/db/ex.json')
      .done ((data) => {
        resolve(data.ex);
      })
      .fail((err) => {
        reject('error', err);
      });
  });
};

const locationJSON = () => {
  return new Promise((resolve, reject) => {
    $.get('../db/locations.json')
      .done((data) => {
        resolve(data.locations);
      })
      .fail((err) => {
        reject('error', err);
      });
  });
};

const printAll = () =>
  exJSON().then((results) => {
    dom.writeEx(results);
    return locationJSON();
  }).then((results) => {
    dom.writeLocation(results);
    console.log(results);
  }).catch((error) => {
    console.error('error', error);
  });

const initializer = () => {
  return printAll();
  // allEvents.allEvents();
  // matchLocation();
  // allEvents.singleExCardEvent();
};

const matchLocation = (exName) => {
  let locations = [];
  let exes = [];
  return exJSON().then((results) => {
    exes = results;
    // dom.writeEx(results);
    return locationJSON();
  }).then((results) => {
    locations = results;
    // console.log('ex', exes);
    // console.log('location', locations);
    const matching = locations.filter((locale) => {
      const matchingEx = exes.find((element) => {
        return element.name === exName;
      });
      console.log('location', locations);
      if (matchingEx.locations.includes(locale.locationId)) {
        console.log('hello');
        return true;
      };
      return false;
    });
    console.log('data:',matching);
    return matching;
  });
};

const getEx = (ex) => {
  return ex;
};

const getLocation = (location) => {
  return location;
};

module.exports = {
  initializer,
  matchLocation,
  getEx,
  getLocation,
};
