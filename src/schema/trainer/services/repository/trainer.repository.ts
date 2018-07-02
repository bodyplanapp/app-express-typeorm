
import { getManager } from "typeorm";
import { Trainer } from "../../../../models/trainer.model";

export class TrainerRepository {

    getRepository() {
        return getManager().getRepository(Trainer);
    }

    async save(trainer: Trainer) {
        return await this.getRepository().save(trainer);
    }

    async findOne(id: number): Promise<Trainer> {
        return await this.getRepository().findOne({ id: id });
    }

    async findAll() {
        return await this.getRepository().find();
    }

}