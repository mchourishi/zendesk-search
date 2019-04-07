const Table = require('cli-table');

module.exports.displayData = function (record) {
    let resultStr = "";
    record.map(rec => {
        const recordTable = new Table();
        Object.entries(rec).forEach(([key, value]) => {
            //console.log(`${key}: ${value}`);
            value = formatData(typeof value,value);
            recordTable.push(
                {[key] : value }
            );
            
        });
        //console.log(userTable.toString());
        resultStr+=`\n${recordTable.toString()}`;
    });
    
    return resultStr;
    
};

function formatData(type,value){
    let returnVal = value;
    if(type === "object"){
        returnVal = value.toString();
    }
    if(type === "boolean"){
        returnVal = (value == true) ? 'Yes' : 'No';
    }
    return returnVal;
}