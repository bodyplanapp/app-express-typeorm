import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, ManyToOne, JoinColumn } from "typeorm";
import { User } from "../user/user.model";
import { Trainer } from "../trainer/trainer.model";

enum Type {
    Exercise = 'exercise',
    Nutritional = 'nutritional',
    Other = 'other'
}

enum Status {
    Available = 'available',
    Cancelled = 'cancelled',
    Removed = 'removed',
    Other = 'other'
}

@Entity()
export class Plan {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @Column()
    description: string;

    @Column("decimal")
    price: number;

    @CreateDateColumn({ type: "timestamp" })
    creatdAt: Date;

    @Column()
    lang: string;

    // @ManyToOne(type => Trainer, trainer => trainer.plans)
    // trainer: Trainer;

    @ManyToOne(type => User, user => user.plans)
    user: User;

    @Column({ default: 0 })
    followers: number;

    @Column("decimal", { default: 0 })
    rating: number;

    @Column('varchar', { default: "other" })
    type: Type

    @Column('varchar', { default: "available" })
    status: Status

}
