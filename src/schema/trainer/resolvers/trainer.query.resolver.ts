import { getRepository } from "typeorm";
import { Trainer } from "../../../models/trainer.model";

export const Query = {
    async getTrainers() {
        return await getRepository(Trainer).find();
    }
};