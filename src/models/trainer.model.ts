import { Entity, Column, OneToMany, ChildEntity, ManyToOne } from "typeorm";
import { User } from "./user.model";
import { Plan } from "./plan.model";

// @ClassEntityChild()
@ChildEntity('trainer')
export class Trainer extends User {

    @Column("decimal", { default: 0 })
    rating: number;

    @Column({ default: 0 })
    planCount: number;

    @Column({ default: 0 })
    planDelete: number;

    @Column({ default: 0 })
    planActive: number;

    @Column("decimal", { default: 0 })
    wallet: number;

    @OneToMany(type => Plan, plan => plan.trainer)
    plans: Plan[];

}
