import {Column, CreateDateColumn, Entity, ManyToOne, PrimaryGeneratedColumn} from 'typeorm';
import {Clients} from '../../clients/entities/clients.entity';

@Entity('cars')
export class Cars {
    @PrimaryGeneratedColumn()
    id: number

    @CreateDateColumn()
    createdAt: Date

    @CreateDateColumn()
    updatedAt: Date

    @Column()
    brand: string

    @Column()
    model: string

    @Column()
    vinCode: string

    @Column()
    regNumber: string

    @ManyToOne(()=> Clients, (owner)=> owner.cars)
    owner: Clients
}
