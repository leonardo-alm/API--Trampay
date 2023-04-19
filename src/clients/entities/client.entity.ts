import { Column, Entity, PrimaryColumn } from "typeorm";

@Entity()
export class Client {
    @PrimaryColumn()
    document: string;

    @Column()
    balance: number;

    @Column()
    date: string;
}
