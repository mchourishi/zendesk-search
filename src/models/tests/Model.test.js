const Model = require("../Model");
const USER_MODEL_DATASET = 
[
  {
    "_id": 1,
    "name": "mark",
    "age": "23",
    "active" : true,
    "subject" : ["maths","science"]
  },
  {
    "_id": 2,
    "name": "nic",
    "age": "25",
    "active" : false,
    "subject" : ["finance","management"]
  }
]
;
const USER_DATASET_FIELDS = ['_id','name','age','active','subject'];

const USER_SINGLE_RESULT = [{"_id": 1, "age": "23", "name": "mark", "active" : true, "subject" : ["maths","science"]}];

describe('Model should load fields and data.', () => {
    it('It can load data and fields for the passed dataset.', () => {
      const model = new Model({ data: USER_MODEL_DATASET });  
      expect(model.data).toBeDefined();
      expect(model.fields).toHaveLength(5);
    });     
  });

  describe('basic model related functionality', () => {
    it('It can show correct fields for passed data set.', () => {
      const model = new Model({ data: USER_MODEL_DATASET });  
      expect(model.fields).toEqual(USER_DATASET_FIELDS);
    }); 

   it('It can display the results when field and value is passed for number value passed.', () => {
      const model = new Model({ data: USER_MODEL_DATASET });  
      const results = model.getResults('_id',1,model);
      expect(results).toEqual(USER_SINGLE_RESULT);
    }); 

    it('It can display the results when field and value is passed for string value passed.', () => {
      const model = new Model({ data: USER_MODEL_DATASET });  
      const results = model.getResults('name',"mar",model);
      expect(results).toEqual(USER_SINGLE_RESULT);
    }); 

    it('It can display the results when field and value is passed for boolean value passed.', () => {
      const model = new Model({ data: USER_MODEL_DATASET });  
      const results = model.getResults('active',true,model);
      expect(results).toEqual(USER_SINGLE_RESULT);
    }); 

    it('It can display the results when field and value is passed for object value passed.', () => {
      const model = new Model({ data: USER_MODEL_DATASET });  
      const results = model.getResults('subject','science',model);
      expect(results).toEqual(USER_SINGLE_RESULT);
    }); 

   })
  