const data = require('./data');

// display by time of the day
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
  SingleExCardEvent();
};

const SingleExCardEvent = () => {
  $('.exCard').click((e) => {
    // $('.exCard').not(`#${e.currentTarget.id}`).hide();
    $('.exCard').not($(e.currentTarget)).hide();
    console.log(e.currentTarget.id);
    data.matchLocation(e.currentTarget.id).then((locations) => {
      const locationNames = locations.map((loc) => loc.name);
      console.log('locationNames:', locationNames);
      $('.locationCard').each((i,locale) => {
        const localeId = $(locale).attr('id');
        console.log('locale:', localeId);
        const inList = locationNames.includes(localeId);
        $(locale).toggle(inList);
        // if (locationNames.includes(localeId)) {
        //   $(locale).show();
        // } else {
        //   $(locale).hide();
        // };
        $('#backButton').removeClass('hide');
        $('.button').addClass('hide');
        goBack();
      });
    });
  });
};

const goBack = () => {
  $('#backButton').click((e) => {
    console.log('back:',e);
    $('.exCard').show();
    $('.locationCard').show();
    $('.button').removeClass('hide');
  });
};

module.exports = {
  allEvents,
};
