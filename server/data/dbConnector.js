import mongoose from 'mongoose';

// Monogoose Connection
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/students-db');

const studentSchema = new mongoose.Schema({
  firstName: {
    type: String
  },
  lastName: {
    type: String
  },
  gender: {
    type: String
  },
  age: {
    type: Number
  },
  address: {
    type: String
  },
  department: {
    type: String
  },
  country: {
    type: String
  },
  contacts: {
    type: Array
  },

});

const Students = mongoose.model('Student', studentSchema);

export { Students };