const writeEx = (ex) => {
  let domString = '';
  domString += `<div class ="exData exCard col-md-6 col-md-offset-3 exName">`;
  domString += `<img class = "exImage" src="${ex.image}" alt="">`;
  domString += `<h3>Name: ${ex.name}</h3>`;
  domString += `<h4>Age: ${ex.age}</h4>`;
  domString += `<p>Flaw: ${ex.flaws}</p>`;
  domString += `</div>`;
  return domString;
};

const writeLocation = (locations) => {
  let strang = '';
  locations.forEach((location) => {
    strang += `<div class ="locationCard  ${location.time.replace(' ','')} col-md-6">`;
    strang += `<img src="${location.image}" alt="">`;
    strang += `<h3 class="locationName">${location.name}</h3>`;
    strang += `<h4 class ="locationAddress">${location.address}</h4>`;
    strang += `<p> ${location.time}</p>`;
    strang += `</div>`;
  });
  return strang;
};

module.exports = {
  writeEx,
  writeLocation,
};
