import { getRepository } from "typeorm";
import { User } from "../../../models/user.model";

export const Mutation = {
  async createUser(_, { user: attrs }) {
    console.log(attrs)
    const user = new User();
    user.firstName = attrs.firstName;
    user.lastName = attrs.lastName;
    return await getRepository(User).save(user);
  }
};