import { Entity, Column, ChildEntity, } from "typeorm";
import { User } from "./user.model";

@ChildEntity('customer')
export class Customer extends User {

    @Column("decimal")
    weigth: number;

    @Column("decimal")
    heigth: number;

}
