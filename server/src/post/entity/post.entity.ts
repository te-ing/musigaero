import { CommentInfoDto } from 'src/comment/dto/commentInfo.dto';
import { CommentEntity } from 'src/comment/entity/comments.entity';
import { UserInfoDto } from 'src/users/dto/userInfo.dto';
import { UserEntity } from 'src/users/entity/users.entity';
import {
  Column,
  CreateDateColumn,
  Entity,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity('Post')
export class PostEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => UserEntity, (user) => user.posts)
  author: UserInfoDto;

  @Column({ length: 10 })
  nickname: string;

  @Column({ length: 20 })
  petname: string;

  @Column()
  deathday: Date;

  @Column({ length: 30 })
  title: string;

  @Column('text')
  body: string;

  @Column('simple-array')
  image: string[];

  @OneToMany(() => CommentEntity, (comment) => comment.post)
  comments: CommentInfoDto[];

  @Column({ default: 'standard' })
  type?: string;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;
}
