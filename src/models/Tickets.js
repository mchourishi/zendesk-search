const Model = require('./Model');
const data = require('../../data/tickets.json');
const name = 'tickets';
//in_current means if the key exists in current schema
const relationships = [{'model' : 'organizations','foreign_key' : 'organization_id', 'primary_key' : '_id', 'return_value' : 'name', 'in_current' : true},
                        {'model' : 'users', 'foreign_key' : 'submitter_id', 'primary_key' : '_id','return_value' : 'name',  'in_current' : true},
                        {'model' : 'users', 'foreign_key' : 'assignee_id','primary_key' : '_id', 'return_value' : 'name', 'in_current' : true}];
                        
module.exports = new Model({name,data,relationships});    