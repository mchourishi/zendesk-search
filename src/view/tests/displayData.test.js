const display = require("../displayData");

const USER_MODEL_DATASET = [
  {
    _id: 1,
    name: "mark",
    age: "23"
  }
];
const USER_SEARCH_RESULTS = `
┌──────┬──────┐
│ _id  │ 1    │
├──────┼──────┤
│ name │ mark │
├──────┼──────┤
│ age  │ 23   │
└──────┴──────┘`;

describe("it call display function", () => {
  it("renders search results in tabular format ", () => {
    const result = display.displayData(USER_MODEL_DATASET);
    expect(result).toBeDefined();
    expect(result).toMatch(USER_SEARCH_RESULTS);
  });
});
