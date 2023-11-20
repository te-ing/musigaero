import { PostEntity } from 'src/post/entity/post.entity';
import {
  Column,
  CreateDateColumn,
  Entity,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import { CommentInfoDto } from '../dto/commentInfo.dto';

@Entity('Comment')
export class CommentEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ nullable: true })
  author: number | null;

  @Column({ length: 20 })
  nickname: string;

  @Column({ nullable: true })
  password: string | null;

  @Column({ length: 1024 })
  body: string;

  @ManyToOne(() => CommentEntity, (comment) => comment.reply)
  reply: CommentInfoDto[];

  @ManyToOne(() => PostEntity, (post) => post.comments)
  post: PostEntity;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;
}
