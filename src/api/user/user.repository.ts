import { User } from "../../models/user.model";
import { getManager } from "typeorm";

export class UserRepository {

    getRepository() {
        return getManager().getRepository(User);
    }

    async findOneByEmail(email) {
        return await this.getRepository().findOne({ email: email });
    }

    findOneByUsername(username) {
        return this.getRepository().findOne({ username: username });
    }
}