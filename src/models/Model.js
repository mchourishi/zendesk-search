class Model {
  constructor(dataObj) {
    const { data, name, relationships } = dataObj;
    this.name = name;
    this.data = data;
    this.relationships = relationships;
    this.fields = this.getFields();
  }
  //Get Fields of dataset.
  getFields() {
    const record = this.data[0];
    const fldKeys = Object.keys(record);
    return fldKeys;
  }
  //Get record by passing field and value.
  getResults(field, value, dataStore) {
    if (!this.fields.includes(field)) {
      throw "Field not found";
    }
    const results = this.data.filter(item => {
      //return item[field] == value;
      return this.query(item[field], value);
    });
    const relatedResults = this.getRelatedRecords(results, dataStore);  
    return relatedResults;
  }

  //With the type of field it is, perform search
  query(field, value) {
    const type = typeof field;
    if (type !== "undefined" && value !== "undefined") {
      if (type == "string") {
        if (value === "") {
          return field === value;
        }
        return field.toLowerCase().includes(value.toLowerCase());
      }

      if (type == "number") {
        return field === value;
      }
      if (type == "boolean") {
        //If value is passed as yes/no
        if (typeof value === "string" && value.toLowerCase() === "yes") {
          value = true;
        } else if (typeof value === "string" && value.toLowerCase() === "no") {
          value = false;
        }
        return field === JSON.parse(value);
      }
      if (type == "object") {
        return (Object.values(field).findIndex((item) => { return item.toLowerCase() === value.toLowerCase() }) >= 0);
      }
    }
    return false;
  }

  //To get Related records from relationships
    getRelatedRecords(results, dataStore){
    const relationships = this.relationships;
    let cnt = 0;    
    if(relationships && relationships.length > 0 ){
    results.map(result => {       
       relationships.map(relation=>{
       
        let relatedStore = dataStore[relation.model];
        let key = (relation.in_current === true) ? relation.primary_key : relation.foreign_key;
        let val = (relation.in_current === true) ? result[relation.foreign_key] : result[relation.primary_key];
        let items = this.getRelatedValue(relatedStore,key,val);
        items.map(item => {
          cnt++;
          let k = `${[relation.model]}_${cnt}`;
          //result[[relation.model]] = item[relation.return_value];
          result[k] = item[relation.return_value];
        });       
       }); 
    });
  }
    return results;
  }

  getRelatedValue(relatedStore, key , value) {
    let relResults = relatedStore.data.filter(item => {
      return item[key] === value;
    });
    return relResults;
  }  
}

module.exports = Model;
