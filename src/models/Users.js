const Model = require('./Model');
const data = require('../../data/users.json');
const name = 'users';
//in_current means if the key exists in current schema
const relationships = [{'model' : 'organizations','foreign_key' : 'organization_id', 'primary_key' : '_id' ,'return_value' : 'name','in_current' : true},
                        {'model' : 'tickets', 'foreign_key' : 'submitter_id', 'primary_key' : '_id' ,'return_value' : 'subject','in_current' : false},
                        {'model' : 'tickets', 'foreign_key' : 'assignee_id' , 'primary_key' : '_id' ,'return_value' : 'subject','in_current' : false}];


module.exports = new Model({name,data,relationships});    