import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Comment {
  @PrimaryGeneratedColumn()
  comment_number: string;

  @Column()
  post_number: number;

  @Column()
  comment: string;

  @Column()
  writer: string;
}
