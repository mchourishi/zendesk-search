const Model = require('./Model');
const data = require('../../data/organizations.json');
const name = 'organization';
//in_current means if the key exists in current schema
const relationships = [{'model' : 'tickets','foreign_key' : 'organization_id',  'primary_key' : '_id' , 'return_value' : 'subject','in_current' : false},
                        {'model' : 'users', 'foreign_key' : 'organization_id', 'primary_key' : '_id' ,'return_value' : 'name', 'in_current' : false}];

module.exports = new Model({name,data,relationships});                  

