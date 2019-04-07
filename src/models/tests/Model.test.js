const Model = require("../Model");
const STUDENT_DATASET = [
  {
    id: 1,
    name: "John",
    age: 20,
    subject: "science"
  },
  {
    id: 2,
    name: "Johny",
    age: 21,
    subject: "maths"
  },
  {
    id: 3,
    name: "Jian",
    age: 22,
    subject: "computers"
  }
];
const STUDENT_DATASET_FIELDS = ['id','name','age','subject'];

const STUDENT_RELATIONSHIP = [{'model' : 'school', 'foreign_key' : 'student_id' , 'primary_key' : 'id', 'return_value' : 'name' , 'in_current' : true}];

describe('Model should load fields and data.', () => {
    it('It can load data and fields for the passed dataset.', () => {
      const model = new Model({ data: STUDENT_DATASET });  
      expect(model.data).toBeDefined();
      expect(model.fields).toHaveLength(4);
    });     
  });

  describe('basic model related functionality', () => {
    it('It can show correct fields for passed data set.', () => {
      const model = new Model({ data: STUDENT_DATASET });  
      expect(model.fields).toEqual(STUDENT_DATASET_FIELDS);
    }); 

  })
  