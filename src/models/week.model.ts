import { Entity, Column, ManyToOne, PrimaryColumn, PrimaryGeneratedColumn } from "typeorm";
import { Plan } from "./plan.model";
import { Workout } from "./workout.model";

enum WeekStatus {
    COMPLETE,
    PROCESS,
    WAITING
}

@Entity()
export class Week {
    @PrimaryGeneratedColumn()
    id: number;
    // @PrimaryGeneratedColumn()
    // @ManyToOne(type => Plan, plan => plan.workouts)
    // plan: Plan;

    // @ManyToOne(type => Workout, workout => workout.plan)
    // @PrimaryGeneratedColumn()
    // workout: Workout;

    // @Column()
    // order: number;

    // @Column()
    // status: WeekStatus

}