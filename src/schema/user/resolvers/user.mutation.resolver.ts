import { getRepository } from "typeorm";
import { User } from "../../../models/user.model";

export const Mutation = {
  async createUser(_, { user: attrs }) {
    const user = new User();
    user.firstName = attrs.firstName;
    user.lastName = attrs.lastName;
    user.email = attrs.email;
    user.password = attrs.password
    user.username = attrs.username;
    user.lang = attrs.lang;
    return await getRepository(User).save(user);
  }
};