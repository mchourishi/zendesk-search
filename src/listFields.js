//This will only get the fields if dataset is provided or all fields if no dataset is provided.
function listFields(args,dataStore){
    let ds = args.dataset;
    const allFields = [];
    //If dataset is defined and its a valid dataset we need to get only that dataset's fields
    if(ds !== undefined && dataStore[ds]!== undefined){
        allFields.push({dataset: dataStore[ds].name, fields: dataStore[ds].fields});        
    }
    //No dataset passed, list all fields from all datasets.
    if(ds == undefined) {
        Object.values(dataStore).map((set) => {
            allFields.push({dataset: set.name , fields: set.fields})
          })               
    }
    //Incorrect dataset passed.
    if(ds!==undefined && dataStore[ds]== undefined){
        return "Incorrect Data Set!";
    }
    return displayFields(allFields);
}

//Display fields in user readable format.
function displayFields(arrFields){
    let flds = []; let ds = "";
    let fieldStr = ""; let separator = "........................................\n";
     if(arrFields.length > 0){
        arrFields.map(set => {
            ds = (set.dataset).toUpperCase();
            fieldStr+=separator;
            fieldStr+=`Fields for ${ds}\n`;
            fieldStr+=separator;
            flds = set.fields;
            if(flds.length > 0 ){
            flds.map(fld => {
                    fieldStr+=`${fld}\n`;
            });
            }else{
                fieldStr+=`No fields found!`;
            }
        });
    } 
    return fieldStr;
}

module.exports = listFields;
