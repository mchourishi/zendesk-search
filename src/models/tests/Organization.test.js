const organizations = require("../Organizations");
const tickets = require("../Tickets");
const users = require("../Users");
const dataStores = { organizations, tickets, users };
const organizations_fields = [
  "_id",
  "url",
  "external_id",
  "name",
  "domain_names",
  "created_at",
  "details",
  "shared_tickets",
  "tags"
];
const organization_test_data = [{
  _id: 101,
  url: "http://initech.zendesk.com/api/v2/organizations/101.json",
  external_id: "9270ed79-35eb-4a38-a46f-35725197ea8d",
  name: "Enthaze",
  domain_names: ["kage.com", "ecratic.com", "endipin.com", "zentix.com"],
  created_at: "2016-05-21T11:10:28 -10:00",
  details: "MegaCorp",
  shared_tickets: false,
  tags: ["Fulton", "West", "Rodriguez", "Farley"],
  tickets_1: "A Drama in Portugal",
  tickets_2: "A Problem in Ethiopia",
  tickets_3: "A Problem in Turks and Caicos Islands",
  tickets_4: "A Problem in Guyana",
  url: "http://initech.zendesk.com/api/v2/organizations/101.json",
  users_1: "Loraine Pittman",
  users_2: "Francis Bailey",
  users_3: "Haley Farmer",
  users_4: "Herrera Norman"
}];

it("it should have the defined fields", () => {
  expect(organizations.fields).toEqual(organizations_fields);
});

it("it should show the result set with the related records", () => {
  const result = organizations.getResults("_id", 101, dataStores);
  expect(result).toEqual(organization_test_data);
});
