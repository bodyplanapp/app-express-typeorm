import { Entity, Column, DiscriminatorValue, ClassEntityChild, OneToMany } from "typeorm";
import { User } from "../user/user.model";
import { Plan } from "../plan/plan.model";

@ClassEntityChild()
@DiscriminatorValue('trainer')
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

    // @OneToMany(type => Plan, plan => plan.trainer)
    // plans: Plan[];

}
