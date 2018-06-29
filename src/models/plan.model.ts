import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, ManyToOne, JoinColumn } from "typeorm";
import { User } from "./user.model";
import { Trainer } from "./trainer.model";

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

    @Column({ nullable: true })
    name: string;

    @Column({ nullable: true })
    description: string;

    @Column("decimal", { nullable: true })
    price: number;

    @CreateDateColumn({ type: "timestamp" })
    creatdAt: Date;

    @Column({ nullable: true })
    lang: string;

    @ManyToOne(type => Trainer, trainer => trainer.plans, { cascade: true })
    trainer: Trainer;

    @Column({ default: 0 })
    followers: number;

    @Column("decimal", { default: 0 })
    rating: number;

    @Column('varchar', { default: "other" })
    type: Type

    @Column('varchar', { default: "available" })
    status: Status

}
