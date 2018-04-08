import { Entity, PrimaryGeneratedColumn, Column, TableInheritance, DiscriminatorColumn, CreateDateColumn, OneToOne, JoinColumn } from "typeorm";
import { File } from "../file/file.model";

enum Gender {
    Male = 'male',
    Female = 'female',
    Other = 'other'
}

@Entity()
@TableInheritance("class-table")
@DiscriminatorColumn({ name: "role", type: "varchar" })
export class User {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    firstName: string;

    @Column()
    lastName: string;

    @Column()
    description: string;

    @OneToOne(type => File)
    @JoinColumn()
    file: File;

    @Column()
    email: string;

    @Column()
    password: string;

    @CreateDateColumn({ type: "timestamp" })
    creatdAt: Date;

    @CreateDateColumn({ type: "timestamp" })
    updatedAt: Date

    @Column('varchar')
    gender: Gender

    @Column()
    activated: boolean;

    @Column()
    username: string;

    @Column()
    followers: number;

    @Column()
    followedBy: number;

    @Column()
    birthday: Date;

    @Column()
    lang: string;

    @Column()
    facebook: number;

    @Column()
    google: number;

    @Column()
    instagram: number;
}
