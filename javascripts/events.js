// const data = require('.data');
// const dom = require ('.dom');

const displayCard = (e) => {
  const timeCard = $(e.target).html();
  console.log(timeCard);
  $('.locationCard').show();
  if (timeCard === 'Morning') {
    $('.locationCard').not('.Morning').hide();
  } else if (timeCard === 'Afternoon') {
    // console.log('line', $('.locationCard').not('.Afternoon'));
    $('.locationCard').not('.Afternoon').hide();
  } else if (timeCard === 'Evening') {
    $('.locationCard').not('.Evening').hide();
  } else if (timeCard === 'After Dark') {
    $('.locationCard').not('.AfterDark').hide();
  }
};

// Search Bar

const filterSearch = (e) => {
  $('.locationCard').show();
  const searchBar = $(e.target).val().toLowerCase();
  console.log(searchBar);
  $('.locationCard').each((i, card) => {
    const locationName = $(card).find('.locationName').text().toLowerCase();
    const locationAddress = $(card).find('.locationAddress').text().toLowerCase();
    const containsName = locationName.includes(searchBar);
    const containsAddress = locationAddress.includes(searchBar);
    // console.log(locationName);
    $(card).toggle(containsName || containsAddress);
    // if (containsName || containsAddress) {
    //   $(card).show();
    // } else {
    //   $(card).hide();
    // }
  });
  if (e.keyCode === 13) {
    // console.log(searchBar);
  }
  // console.log(e);
};

const allEvents = () => {
  $('.button').on('click', displayCard);
  $('#mySearch').keydown((filterSearch));
};

module.exports = allEvents;
