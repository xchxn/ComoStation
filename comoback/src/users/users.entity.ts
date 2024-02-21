import { Entity, Column } from 'typeorm';

@Entity()
export class User {
  @Column({ unique: true })
  id: string;

  @Column({ unique: true })
  name: string;

  @Column()
  password: string;
}
