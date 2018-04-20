import { Entity, PrimaryGeneratedColumn, Column, TableInheritance, DiscriminatorColumn, CreateDateColumn, OneToOne, JoinColumn, OneToMany } from "typeorm";
import { File } from "../file/file.model";
import { Plan } from "../plan/plan.model";

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

    @Column('varchar', { default: "other" })
    gender: Gender

    @Column({ default: false })
    activated: boolean;

    @Column()
    username: string;

    @Column({ default: 0 })
    followers: number;

    @Column({ default: 0 })
    followedBy: number;

    @Column()
    birthday: Date;

    @Column()
    lang: string;

    @Column({ nullable: true })
    facebook: number;

    @Column({ nullable: true })
    google: number;

    @Column({ nullable: true })
    instagram: number;

    @OneToMany(type => Plan, plan => plan.user)
    plans: Plan[];
}
