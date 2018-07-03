import { Entity, PrimaryGeneratedColumn, OneToMany, Column, CreateDateColumn, ManyToMany, JoinTable, ManyToOne } from "typeorm";
import { Week } from "./week.model";
import { Day } from "./day.model";
import { Exercise } from "./exercise.model";
import { Plan } from "./plan.model";

@Entity()
export class Workout {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @Column("decimal", { default: 0 })
    rating: number;

    @CreateDateColumn({ type: "timestamp" })
    creatdAt: Date;

    @CreateDateColumn({ type: "timestamp" })
    updatedAt: Date

    @ManyToOne(type => Plan, plan => plan.workouts)
    plan: Plan[];

    @OneToMany(type => Exercise, exercise => exercise.workout)
    exercises: Exercise[];
}