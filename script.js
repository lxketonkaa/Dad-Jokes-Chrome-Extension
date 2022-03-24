var axios = require("axios").default;

var options = {
  method: 'GET',
  url: 'https://healthruwords.p.rapidapi.com/v1/quotes/',
  params: {t: 'Wisdom', maxR: '1', size: 'medium', id: '731'},
  headers: {
    'X-RapidAPI-Host': 'healthruwords.p.rapidapi.com',
    'X-RapidAPI-Key': '86aae83eb5msh17535b44750474cp1133a2jsn2f7754f85517'
  }
};

axios.request(options).then(function (response) {
	console.log(response.data);
}).catch(function (error) {
	console.error(error);
});
