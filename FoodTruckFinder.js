require('console.table');
const request = require('request');

const currentDate = new Date();
const dayOrder = currentDate.getDay();
const timeZoneOptions = {
  hour: '2-digit',
  minute: '2-digit',
  hour12: false,
  timeZone: 'America/Los_Angeles'
};
const currentTime = currentDate.toLocaleString('en-US', timeZoneOptions);
const LIMIT = 10;

foodTruckFinder();

/*
 * Displays a list of food trucks for a given time.
 * @param offset - the starting value offset for each page of result.
 */
function foodTruckFinder(offset=0) {
  const requestURL = `http://data.sfgov.org/resource/bbb8-hzi6.json?dayorder=${dayOrder}
    &$select=applicant,location
    &$where='${currentTime}' BETWEEN start24 AND end24
    &$order=applicant
    &$limit=${LIMIT}
    &$offset=${offset}`;

  request(requestURL, function (error, response, body) {
    if (!error && response.statusCode === 200) {
      let foodTrucks = JSON.parse(body);

      // When no trucks are available at the given time.
      if (offset === 0 && foodTrucks.length === 0) {
        console.log('No trucks found at this time. Please try again later!');
        return;
      }

      // Display the list of food trucks for the current time.
      console.log('\n');
      console.table(`Page ${offset/10 + 1}`, foodTrucks);

      // When the food truck list is exhausted.
      if (foodTrucks.length < 10) {
        console.log("End of Results");
        process.exit();
      }

      process.stdout.write("Enter NO to Quit or anything else to continue: ");
      process.stdin.once('data', function (input) {
        if (input.toString().toLowerCase().trim() === 'no') {
          process.exit();
        } else {
          foodTruckFinder(offset+LIMIT);
        }
      });
    } else {
      error ? console.log(error) : console.log(`Error retrieving data due to ${JSON.parse(body).message}`);
      process.exit();
    }
  });
}