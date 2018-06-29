import { getRepository } from "typeorm";
import { User } from "../../../models/user.model";

export const Query = {
    async getUsers() {
        return await getRepository(User).find();
    }
};