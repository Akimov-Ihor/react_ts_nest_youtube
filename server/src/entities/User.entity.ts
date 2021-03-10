import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  google_id: string;

  @Column()
  email: string;

  @Column()
  name: string;

  @Column()
  picture: string;
}
