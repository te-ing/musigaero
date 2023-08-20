import { PostEntity } from 'src/post/entity/post.entity';
import { Column, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { CommentInfoDto } from '../dto/commentInfo.dto copy';

@Entity('Comment')
export class CommentEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ nullable: true })
  author: number | null;

  @Column({ nullable: true })
  password: string | null;

  @Column({ length: 1024 })
  body: string;

  @ManyToOne(() => CommentEntity, (comment) => comment.reply)
  reply: CommentInfoDto[];

  @OneToMany(() => PostEntity, (post) => post.comments)
  post: PostEntity;
}
