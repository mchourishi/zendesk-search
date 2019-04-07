const display = require("./view/displayData");

function search(args, dataStore) {
  let { dataset, field, value } = args;
  let passedDataSet = dataStore[dataset];
  //Valid data set passed.
  if (passedDataSet !== undefined) {
    try {
      //Correct field and dataset passed, display data.
      let results = passedDataSet.getResults(field, value, dataStore);
      if(results.length > 0) {
      return display.displayData(results);
      }else{
          return "No data found!";
      }
    } catch (error) { //Incorrect field passed.
      return error;
    }
  } else {
    return "Incorrect Data Set.";
  }
}

module.exports = search;
