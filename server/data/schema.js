import { resolvers } from './resolvers';
import { makeExecutableSchema } from 'graphql-tools';

const typeDefs = `
      type Student {
          id: ID
          firstName: String
          lastName: String
          gender: Gender
          age: Int
          address: String
          department: String
          country: String
          contacts: [Contact]
      }


      type Contact {
          facebook: String
          skype: String
          whatsapp: String
          mobile: Int
      }

      enum Gender {
          MALE
          FEMALE
          OTHER
      }

      type Query {
          getStudent(id: ID): Student
          allStudents: [Student]
      }

      input StudentInput {
          id: ID
          firstName: String!
          lastName: String
          gender: Gender
          age: Int
          address: String
          department: String
          country: String
          contacts: [ContactInput]
      }

      input ContactInput {
          facebook: String
          skype: String 
        whatsapp: String    
      }

      type Mutation {
          createStudent(input: StudentInput): Student
          updateStudent(input: StudentInput): Student
          deleteStudent(id: ID!): String
      }
      `;
const schema = makeExecutableSchema({ typeDefs, resolvers});
export { schema };