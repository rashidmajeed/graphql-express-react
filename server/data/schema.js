import { resolvers } from './resolvers';
import { makeExecutableSchema } from 'graphql-tools';

const typeDefs = `
      type Student {
          id: ID
          firstName: String
          lastName: String
          gender: Gender
          image: String
          age: Int
          address: String
          department: String
          country: String
          contacts: [Contact]
      }


      type Contact {
          email: String
          phone: Int
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
          image: String
          age: Int
          address: String
          department: String
          country: String
          contacts: [ContactInput]
      }

      input ContactInput {
          email: String
          phone: Int
      }

      type Mutation {
          createStudent(input: StudentInput): Student
          updateStudent(input: StudentInput): Student
          deleteStudent(id: ID!): String
      }
      `;
const schema = makeExecutableSchema({ typeDefs, resolvers});
export { schema };