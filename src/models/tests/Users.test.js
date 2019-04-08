const organizations = require("../Organizations");
const tickets = require("../Tickets");
const users = require("../Users");
const dataStores = { organizations, tickets, users };
const users_fields = [
  "_id",
  "url",
  "external_id",
  "name",
  "alias",
  "created_at",
  "active",
  "verified",
  "shared",
  "locale",
  "timezone",
  "last_login_at",
  "email",
  "phone",
  "signature",
  "organization_id",
  "tags",
  "suspended",
  "role"
];
const users_test_data = [
  {
    _id: 1,
    active: true,
    alias: "Miss Coffey",
    created_at: "2016-04-15T05:19:46 -10:00",
    email: "coffeyrasmussen@flotonic.com",
    external_id: "74341f74-9c79-49d5-9611-87ef9b6eb75f",
    last_login_at: "2013-08-04T01:03:27 -10:00",
    locale: "en-AU",
    name: "Francisca Rasmussen",
    organization_id: 119,
    organizations_1: "Multron",
    phone: "8335-422-718",
    role: "admin",
    shared: false,
    signature: "Don't Worry Be Happy!",
    suspended: true,
    tags: ["Springville", "Sutton", "Hartsville/Hartley", "Diaperville"],
    "tickets_1": "A Nuisance in Kiribati",
    "tickets_2": "A Nuisance in Saint Lucia",
    "tickets_3": "A Problem in Russian Federation",
    "tickets_4": "A Problem in Malawi",
    timezone: "Sri Lanka",
    url: "http://initech.zendesk.com/api/v2/users/1.json",
    verified: true
  }
];

it("it should have the defined fields", () => {
  expect(users.fields).toEqual(users_fields);
});

it("it should show the result set with the related records", () => {
  const result = users.getResults("_id", 1, dataStores);
  expect(result).toEqual(users_test_data);
});
