import { Entity, Column, DiscriminatorValue, ClassEntityChild } from "typeorm";
import { User } from "../user/user.model";

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

}
