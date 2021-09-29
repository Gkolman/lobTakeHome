let axios = require('axios')
const fs = require('fs')

let helperFunctions = {
  getMatching: (substring) => {
    if (!substring) return 'no string'
    substring = substring.toLowerCase();
    let data = JSON.parse(fs.readFileSync("./addresses.json", "utf8"));
    let matchingAddresses = [];
    for (var i = 0; i < data.length; i++) {
      let address = data[i];
      for (key in address) {
        let position = address[key].toLowerCase().indexOf(substring);
        if (position > -1) {
          matchingAddresses.push([address,position]);
          break;
        }
      }
    }
    return matchingAddresses
  },
  filterByPosition : (substring) => {
      matchingAddresses = helperFunctions.getMatching(substring)
      let filteredByPosition = matchingAddresses.sort((a,b) => {return a[1] - b[1]});
      return filteredByPosition.map((cv) => {return cv[0]});
  },
  addAddress: (data) => {
    let currentAddresses = JSON.parse(fs.readFileSync("./addresses.json", "utf8"));
    currentAddresses.push(data)
    fs.writeFileSync("./addresses.json", JSON.stringify(currentAddresses));
  },
  deleteAddress: (address) => {
    // missing key identifier to target which address to delete

  },
  updateAddress: (address) => {
    // missing key identifier to target which address to update
  }
}
module.exports = {helperFunctions: helperFunctions}