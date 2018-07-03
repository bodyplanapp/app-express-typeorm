import { Entity, PrimaryGeneratedColumn, Column, OneToMany, OneToOne, JoinColumn } from "typeorm";
import { Day } from "./day.model";
import { File } from "./file.model";
import { Workout } from "./workout.model";

@Entity()
export class Exercise {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @Column()
    description: string;

    @Column()
    set: number;

    @Column()
    reps: number;

    @Column("decimal", { default: 0 })
    weight: number;

    @OneToMany(type => Workout, workout => workout.exercises)
    workout: Workout[];

    @OneToOne(type => File, { cascade: true })
    @JoinColumn()
    file: File;
}