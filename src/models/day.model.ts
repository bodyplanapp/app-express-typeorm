import { Entity, ManyToOne, PrimaryColumn, Column, PrimaryGeneratedColumn } from "typeorm";
import { Exercise } from "./exercise.model";
import { Workout } from "./workout.model";

@Entity()
export class Day {
    @PrimaryGeneratedColumn()
    id: number;
    // @ManyToOne(type => Exercise, exercise => exercise.workout)
    // @PrimaryGeneratedColumn()
    // exercise: Exercise;

    // @ManyToOne(type => Workout, workout => workout.exercise)
    // @PrimaryGeneratedColumn()
    // workout: Workout;

    // @Column()
    // order: number;

}