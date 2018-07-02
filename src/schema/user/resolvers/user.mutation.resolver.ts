import { getRepository } from "typeorm";
import { User } from "../../../models/user.model";
import { UserService } from "../services/user/user.service";

const userService = new UserService();

export const Mutation = {

  async createUser(_, { user: attrs }) {
    const user = userService.createUser(attrs);
    return await getRepository(User).save(user);
  },

  async editUser(_, { user: attrs }) {
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