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
            const userRepository = getRepository(User);
            return await userRepository.findOne({id: parseInt(id)});
        },
    },
    Mutation: {
        addUser: async (_, {firstName, lastName, age}, __) => {
            const userRepository = getRepository(User);
            const user = new User();
            user.firstName = firstName;
            user.lastName = lastName;
            user.age = age;
            await userRepository.insert(user);
            return user;
        },
        updateUser: async (_, {id, firstName, lastName, age}, __) => {
            const userRepository = getRepository(User);
            const user = await userRepository.findOne({id:id});
            if(firstName){
                user.firstName = firstName;
            }
            if(lastName){
                user.lastName = lastName;
            }
            if(age){
                user.age = age;
            }
            userRepository.save(user)
            return user;
        },
        deleteUser: async(_, {id}, __) => {
            const userRepository = getRepository(User);
            const user = await userRepository.findOne({id:id});
            await userRepository.remove(user);
            user.id = id;
            return user;
        },
    },
};