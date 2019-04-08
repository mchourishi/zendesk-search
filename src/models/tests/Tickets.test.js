const organizations = require("../Organizations");
const tickets = require("../Tickets");
const users = require("../Users");
const dataStores = { organizations, tickets, users };
const tickets_fields = [
  "_id",
  "url",
  "external_id",
  "created_at",
  "type",
  "subject",
  "description",
  "priority",
  "status",
  "submitter_id",
  "assignee_id",
  "organization_id",
  "tags",
  "has_incidents",
  "due_at",
  "via"
];
const ticket_test_data = [
  {
    _id: "436bf9b0-1147-4c0a-8439-6f79833bff5b",
    assignee_id: 24,
    created_at: "2016-04-28T11:19:34 -10:00",
    description:
      "Nostrud ad sit velit cupidatat laboris ipsum nisi amet laboris ex exercitation amet et proident. Ipsum fugiat aute dolore tempor nostrud velit ipsum.",
    due_at: "2016-07-31T02:37:50 -10:00",
    external_id: "9210cdc9-4bee-485f-a078-35396cd74063",
    has_incidents: false,
    organization_id: 116,
    organizations_1: "Zentry",
    priority: "high",
    status: "pending",
    subject: "A Catastrophe in Korea (North)",
    submitter_id: 38,
    tags: [
      "Ohio",
      "Pennsylvania",
      "American Samoa",
      "Northern Mariana Islands"
    ],
    type: "incident",
    url:
      "http://initech.zendesk.com/api/v2/tickets/436bf9b0-1147-4c0a-8439-6f79833bff5b.json",
      "users_2": "Elma Castro",
      "users_3": "Harris Côpeland",
    via: "web"
  }
];

it("it should have the defined fields", () => {
  expect(tickets.fields).toEqual(tickets_fields);
});

it("it should show the result set with the related records", () => {
  const result = tickets.getResults("_id","436bf9b0-1147-4c0a-8439-6f79833bff5b",dataStores);
  expect(result).toEqual(ticket_test_data);
});
