const outputDiv = $('#exContainer');
const anotherDiv = $('#locationContainer');

const writeEx = (ex) => {
  let domString = '';
  ex.forEach((ex) => {
    domString += `<div id ="${ex.name}" class="col-sm-6 col-md-4 exCard">`;
    domString +=   `<div class="thumbnail exes">`;
    domString += `<img id ="${ex.name}" class = "exImage" src="${ex.image}" alt="">`;
    domString += `<div class="caption">`;
    domString += `<h2>${ex.name}</h2>`;
    domString += `<h3>Age: ${ex.age}</h3>`;
    domString += `<h3>Flaws: ${ex.flaws}</h3>`;
    domString += `</div>`;
    domString += `</div>`;
    domString += `</div>`;
  });
  // return domString;
  printEx(domString);
};

const writeLocation = (locations) => {
  let strang = '';
  locations.forEach((location) => {
    strang += `<div id="${location.name}" class="col-sm-6 col-md-3 ${location.time.replace(' ','')} locationCard">`;
    strang += `<div class="thumbnail">`;
    strang += `<img class ="locationImage" src="${location.image}" alt="">`;
    strang += `<div class = "caption">`;
    strang += `<h2 class="locationName">${location.name}</h2>`;
    strang += `<h4 class ="locationAddress">${location.address}</h4>`;
    strang += `<h4> ${location.time}</h4>`;
    strang += `</div>`;
    strang += `</div>`;
    strang += `</div>`;
  });
  // return strang;
  printLocation(strang);
};

const printEx = (ex) => {
  outputDiv.append(ex);
};

const printLocation = (location) => {
  anotherDiv.append(location);
};

module.exports = {
  writeEx,
  writeLocation,
};
