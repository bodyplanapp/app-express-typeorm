
import { TrainerRepository } from "../services/repository/trainer.repository";
import { UserRepository } from "../../user/services/repository/user.repository";
import { TrainerService } from "../../../api/trainer/trainer.service";
import * as auth from "../../../auth/auth.service";


const userRepository = new UserRepository();
const trainerRepository = new TrainerRepository();
const trainerService = new TrainerService();

export const Mutation = {

    async createTrainer(_, { trainer: req }) {
        if (await userRepository.findOneByEmail(req.email)) {
            throw new Error('Email already in use')
        } else if (await userRepository.findOneByUsername(req.username)) {
            throw new Error('Username already in use')
        } else {
            const trainer = trainerService.createTrainer(req)
            const result = await trainerRepository.save(trainer);
            const token = auth.signToken(result.id);
            return token
        }
    }
};
