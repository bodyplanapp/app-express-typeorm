import { Entity, Column, DiscriminatorValue, ClassEntityChild } from "typeorm";
import { User } from "../user/user.model";

@ClassEntityChild()
@DiscriminatorValue('trainer')
export class Trainer extends User {

    @Column("decimal")
    rating: number;

    @Column()
    planCount: number;

    @Column()
    planDelete: number;

    @Column()
    planActive: number;

    @Column("decimal")
    wallet: number;

}
