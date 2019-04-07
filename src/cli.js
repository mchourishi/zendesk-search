const organizations = require('./models/Organizations');
const tickets = require('./models/Tickets');
const users = require('./models/Users');
const listFields = require('./listFields');
const search = require('./search');
const dataStores = {organizations,tickets,users};

const delimiter = "zendesk:";

function execute(vorpal){
    const cli = vorpal();
    cli.delimiter(delimiter);
    cli.log('Welcome to Zendesk Search!!!');
    cli.log('Type help to list available commands.');
    //dataset, field and value are all mandatory
    cli.command('search <dataset> <field> <value>', 'Searches through the dataset').action(function(args,callback){
        let result = search(args,dataStores);
        cli.log(result);
        callback();
    });
    //dataset is optional here
    cli.command('list [dataset]', 'List fields on dataset provided or search on all datasets').action(function(args,callback){        
        let result = listFields(args,dataStores);
        cli.log(result);
        callback();
    });
    return cli;
}
module.exports = execute;