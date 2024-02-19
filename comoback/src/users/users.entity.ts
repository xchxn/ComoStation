import { Entity, Column } from 'typeorm';

@Entity()
export class User {
  @Column({ unique: true })
  id: string;

  @Column({ unique: true })
  nickname: string;

  @Column()
  password: string;
}
