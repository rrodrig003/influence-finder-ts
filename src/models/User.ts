import {Entity, Column, PrimaryGeneratedColumn, OneToMany, JoinColumn} from 'typeorm';
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

  @OneToMany(type => Influencial_tweet, influencial_tweet => influencial_tweet.user)
  tweets: Influencial_tweet[];
}