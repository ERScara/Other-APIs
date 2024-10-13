const moment = require('moment');

const todaysDate = moment().format("MMMM Do YYYY, h:mm:ss a"); // January 1st 2016, 12:00:00 AM
const Time = moment().startOf('day').fromNow();
const calendar = moment().calendar();
console.log(todaysDate);
console.log(Time);
console.log(calendar);