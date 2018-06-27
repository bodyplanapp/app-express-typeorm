import { getRepository } from "typeorm";
import { Customer } from "../../api/customer/customer.model";
import { randomBytes } from "crypto";

export const createCardMutation = {
    async createCard(_, { card: attrs }) {
        const repository = getRepository(Customer);
        const card = {
            id: randomBytes,
            ...attrs,
        };
        await repository.save(card);
        return card;
    }
};