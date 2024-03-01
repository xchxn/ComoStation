import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Post {
  @PrimaryGeneratedColumn()
  post_number: string;

  @Column()
  title: string;

  @Column()
  content: string;

  @Column()
  writer: string;
}
