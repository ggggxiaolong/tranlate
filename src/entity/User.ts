import {Entity, PrimaryGeneratedColumn, Column, OneToMany} from "typeorm";
import { type } from "os";
import { Post } from "./Post";

@Entity()
export class User {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    firstName: string;

    @Column()
    lastName: string;

    @Column()
    age: number;

    @OneToMany(type => Post, post => post.user, {cascade: true})
    posts: Post[];
}
