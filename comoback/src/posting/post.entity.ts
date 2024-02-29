import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Post {
  @PrimaryGeneratedColumn()
  number: string;

  @Column()
  title: string;

  @Column()
  content: string;

  @Column()
  writer: string;
}
