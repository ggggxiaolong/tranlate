import { getRepository } from "typeorm";
import { User } from './entity/User';
import { Post } from "./entity/Post";

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
        posts: async(_,__,___) => {
            const postRepository = getRepository(Post);
            return await postRepository.find();
        },
    },
    Mutation: {
        async addUser(parent, {user}, context, info){
            const userRepository = getRepository(User);
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
            return id;
        },
        addPost: async(_, {post}) => {
            const user = new User();
            user.id = post.userId;
            post.user = user;
            await getRepository(Post).insert(post)
            return post
        },
        deletePost: async(_,{id},__) => {
            const postRepository = getRepository(Post);
            const post = await postRepository.findOne({id:id});
            if(post){
                await postRepository.remove(post);
            }
            return id;
        }
    },
    User: {
        posts: async(user,_,__, ___) => {
            const postRepository = getRepository(Post);
            return await postRepository.find({user:user});
        },
    },
};