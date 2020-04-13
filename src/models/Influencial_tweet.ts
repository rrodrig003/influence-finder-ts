import {Entity, Column, PrimaryGeneratedColumn, ManyToOne} from 'typeorm'
import { User } from './User';

@Entity()
  export class Influencial_tweet {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    tweeter_id: number;

    @Column()
    tweeter_name: string;

    @Column()
    tweet: string;

    @Column()
    follower_count: number;

    @Column()
    following_count: number;

    @Column({nullable: true})
    category: string;

    @Column()
    image_url: string;
  }