import { getRepository } from "typeorm";
import { Trainer } from "../../../api/trainer/trainer.model";

export const Query = {
    async getTrainers() {
        return await getRepository(Trainer).find();
    }
};