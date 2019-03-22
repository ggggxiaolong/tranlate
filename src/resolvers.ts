import { getRepository } from "typeorm";
import { User } from './entity/User';

export const resoler = {
    Query: {
        users: async (_, __, ___) => {
            const userRepository = getRepository(User);
            const users = await userRepository.find();
            return users;
        },
        user: async (_, {id}, __) => {
            const userRepository = getRepository(User)
            return await userRepository.findOne({id: parseInt(id)});
        }
    }
};