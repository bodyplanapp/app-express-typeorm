import { getRepository } from "typeorm";
import { User } from "../../../api/user/user.model";

export const Query = {
    async getUsers() {
        return await getRepository(User).find();
    }
};