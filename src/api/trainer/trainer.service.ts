
import { Trainer } from "../../models/trainer.model";
import { File } from "../../models/file.model";
import { TrainerRepository } from "../../schema/trainer/services/repository/trainer.repository";

export class TrainerService {

    trainerRepository: TrainerRepository = new TrainerRepository;

    createTrainer(trainerDTO) {
        const file = new File();
        const trainer = new Trainer();
        trainer.firstName = trainerDTO.firstName;
        trainer.lastName = trainerDTO.lastName;
        trainer.username = trainerDTO.username;
        trainer.email = trainerDTO.email;
        trainer.password = trainerDTO.password;
        trainer.lang = trainerDTO.lang;
        file.url = "none";
        trainer.file = file;
        return trainer;
    }

}



