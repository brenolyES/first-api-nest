import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Task {

  @PrimaryGeneratedColumn()
  id: Number

  @Column()
  title : String;

  @Column()
  description : String;
}