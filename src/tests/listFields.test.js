const listFields = require("../listFields");

const USER_MODEL_DATASET = `
[
  {
    "_id": 1,
    "name": "mark",
    "age": "23"
  }
]
`;
const USER_MODEL_DATASET_FIELDS = 
`........................................
Fields for USERS
........................................
_id
name
age`;

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
const TICKET_MODEL_DATASET_FIELDS = `
........................................
Fields for TICKETS
........................................
_id
subject
description
priority`;

const Model = require("../models/Model");

const datasets = {
  users: new Model({ name: "users", data: JSON.parse(USER_MODEL_DATASET) }),
  tickets: new Model({ name: "tickets", data: JSON.parse(TICKET_MODEL_DATASET) })
};
const cli = require("vorpal")();

global.console = { log: jest.fn() };

describe("it can call listFields function", () => {
  it("renders a list of fields when a dataset is passed", () => {
    const result = listFields({ dataset: "users" }, datasets);
    expect(result).toEqual(expect.stringContaining(USER_MODEL_DATASET_FIELDS));
  });

  it("gives an error message if incorrect model is passed", () => {
    const result = listFields({ dataset: "schools" }, datasets);
    expect(result).toMatch('Incorrect');
  });

  it("renders a list of all model fields if no dataset is provided", () => {
    const result = listFields("", datasets);
    expect(result).toEqual(expect.stringContaining(USER_MODEL_DATASET_FIELDS));
    expect(result).toEqual(expect.stringContaining(TICKET_MODEL_DATASET_FIELDS));
  });
});
