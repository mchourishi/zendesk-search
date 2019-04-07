const search = require('../search');
const USER_MODEL_DATASET = `
[
  {
    "_id": 1,
    "name": "mark",
    "age": "23"
  }
]
`;

const TICKET_MODEL_DATASET = `
[
  {
    "_id": 1,
    "subject": "Fix Issues",
    "description" : "Lorem Ips",
    "priority": "high"
  }
]
`;

const Model = require("../models/Model");

const datasets = {
  users: new Model({ name: "users", data: JSON.parse(USER_MODEL_DATASET) }),
  tickets: new Model({ name: "tickets", data: JSON.parse(TICKET_MODEL_DATASET) })
};

const cli = require("vorpal")();

//global.console = { log: jest.fn() };

const USER_SEARCH_RESULTS = `
┌──────┬──────┐
│ _id  │ 1    │
├──────┼──────┤
│ name │ mark │
├──────┼──────┤
│ age  │ 23   │
└──────┴──────┘`;



 describe("it can call search function", () => {
    it("renders search results with the dataset, field and value passed", () => {
        const result = search({ dataset: "users", field : "_id" , value : 1 }, datasets);
        expect(result).toBeDefined();
        expect(result).toMatch(USER_SEARCH_RESULTS);
    });

    it("gives no data found message", () => {
        const result = search({ dataset: "users", field : "_id" , value : 10 }, datasets);
        expect(result).toMatch('No data');
      });

      it("gives error message if incorrect field is passed", () => {
        const result = search({ dataset: "users", field : "id" , value : 1 }, datasets);
        expect(result).toMatch('Field not found');
      });  

      it("gives error message if incorrect dataset is passed", () => {
        const result = search({ dataset: "schools", field : "_id" , value : 1 }, datasets);
        expect(result).toMatch('Incorrect Data Set');
      });  
}); 