import { Entity, PrimaryGeneratedColumn, Column, OneToOne } from "typeorm";
import { User } from "./user.model";

@Entity()
export class File {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    url: string;

}