import {Entity, Column, PrimaryGeneratedColumn, OneToMany, JoinColumn, ManyToMany, JoinTable} from 'typeorm';
import {Influencial_tweet} from './Influencial_tweet';

@Entity()
export class User {

  @PrimaryGeneratedColumn()
  id: number;

  @Column({
    length: 50,
    unique: true,

  })
  username: string;

  @Column("text")
  email: string;

  @Column("alphanum")
  password: string;

  @Column("text")
  loginType: string;

  @Column("alphanum")
  token: string;

  @Column("alphanum")
  token_secret: string;

  @ManyToMany(type => Influencial_tweet)
  @JoinTable()
  tweets: Influencial_tweet[];
}