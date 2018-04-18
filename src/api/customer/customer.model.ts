import { Entity, Column, DiscriminatorValue, ClassEntityChild } from "typeorm";
import { User } from "../user/user.model";

@ClassEntityChild()
@DiscriminatorValue('customer')
export class Customer extends User {

    @Column("decimal")
    weigth: number;

    @Column("decimal")
    heigth: number;

}
