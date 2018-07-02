import { User } from "../../../../models/user.model";

export class UserService {

    createUser(attrs) {
        const user = new User();
        user.firstName = attrs.firstName;
        user.lastName = attrs.lastName;
        user.email = attrs.email;
        user.password = attrs.password
        user.username = attrs.username;
        user.lang = attrs.lang;
        return user;
    }
}