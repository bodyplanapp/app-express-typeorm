import { Entity, Column, DiscriminatorValue, ClassEntityChild } from "typeorm";
import { User } from "../user/user.model";

@ClassEntityChild()
@DiscriminatorValue('customer')
export class Customer extends User {

    @Column("double")
    weigth: number;

    @Column("double")
    heigth: number;

}
