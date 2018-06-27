import { getRepository } from "typeorm";
import { Trainer } from "../../../api/trainer/trainer.model";
import auth from "../../../auth";

export const Mutation = {
    async createTrainer(_, { trainer: attrs }) {
        getRepository(Trainer).save(attrs)
            .then(trainer => {
                const token = auth.signToken(trainer.id);
                return {
                    code: 200,
                    message: 'Trainer created',
                    token
                }
            }).catch(error => {
                return {
                    statusCode: 501,
                    message: "Server error",
                    error
                }
            });
    }
};
