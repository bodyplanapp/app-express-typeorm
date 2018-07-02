export default
  `
    type Mutation {
      createUser(user: NewUser!): User!
      editUser(user: EditUser!): User!
      }
`;
