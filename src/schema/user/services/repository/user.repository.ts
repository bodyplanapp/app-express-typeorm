
import { getManager } from "typeorm";
import { User } from "../../../../models/user.model";

export class UserRepository {

    getRepository() {
        return getManager().getRepository(User);
    }

    async findOneByEmail(email) {
        return await this.getRepository().findOne({ email: email });
    }

    async findOneByUsername(username) {
        return this.getRepository().findOne({ username: username });
    }
}