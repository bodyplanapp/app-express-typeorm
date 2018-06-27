import { getRepository } from "typeorm";
import { User } from "../../../api/user/user.model";

export const Mutation = {
  async createUser(user: User) {
    return await getRepository(User).save(user);
  }
};