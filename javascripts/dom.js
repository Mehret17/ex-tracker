const writeEx = (ex) => {
  let domString = '';
  domString += `<div class ="exData exCard col-md-6 col-md-offset-3">`;
  domString += `<img src="${ex.image}" alt="">`;
  domString += `<h3>${ex.name}</h3>`;
  domString += `<h4>${ex.age}</h4>`;
  domString += `<p>${ex.flaws}</p>`;
  domString += `</dvi>`;
  return domString;
};

const writeLocation = (locations) => {
  let strang = '';
  locations.forEach((location) => {
    strang += `<div class ="locationCard col-md-6">`;
    strang += `<img src="${location.image}" alt="">`;
    strang += `<h3>${location.name}</h3>`;
    strang += `<h4>${location.address}</h4>`;
    strang += `<p>${location.time}</p>`;
    strang += `<div>`;
  });
  return strang;
};

module.exports = {
  writeEx,
  writeLocation,
};
