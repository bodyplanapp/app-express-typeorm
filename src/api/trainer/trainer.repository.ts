import { Trainer } from "../../models/trainer.model";
import { getManager, Transaction, TransactionRepository, Repository } from "typeorm";

export class TrainerRepository {

    getRepository() {
        return getManager().getRepository(Trainer);
    }

    save(trainer: Trainer) {
        return this.getRepository().save(trainer);
    }

    findOne(id: number): Promise<Trainer> {
        return this.getRepository().findOne(id);
    }

    findAll() {
        return this.getRepository().find();
    }

}