import { Injectable, Inject } from '@nestjs/common';
import { Repository } from 'typeorm';
import { Post } from './post.entity';
import { Comment } from './comment.entity';

@Injectable()
export class PostingService {
  constructor(
    @Inject('POST_REPOSITORY')
    private postRepository: Repository<Post>,
    @Inject('COMMENT_REPOSITORY')
    private commentRepository: Repository<Comment>,
  ) {}
  async posting(title: string, content: string, writer: string): Promise<any> {
    console.log(title);
    const post = await this.postRepository
      .createQueryBuilder()
      .insert()
      .into(Post)
      .values({ title: title, content: content, writer: writer })
      .execute();
    return post;
  }

  //db에서 게시글 목록 가져오기
  //추후 comment 테이블과 join하는 형태로 쿼리 없데이트
  async getPosts(): Promise<any> {
    const post = await this.postRepository.createQueryBuilder('post').getMany();
    //.select()
    console.log(post);
    return post;
  }
  //타겟 게시글 보기
  async viewPost(post_number: number): Promise<any> {
    const post = await this.postRepository
      .createQueryBuilder('post')
      .where('post.post_number = :pn', { pn: post_number })
      .getOne();
    return post;
  }

  //게시글 업데이트
  async updatePost(): Promise<any> {
    // const post = await this.postRepository
    //   .createQueryBuilder()
    //   .select()
    //   .from(Post, 'post')
    //   .where()
    //   .execute();
    //  console.log(post);
    return;
  }
  //게시글 삭제
  async deletePost(): Promise<any> {
    // const post = await this.postRepository
    //   .createQueryBuilder()
    //   .select()
    //   .from(Post, 'post')
    //   .where()
    //   .execute();
    //  console.log(post);
    return;
  }
  //댓글 등록
  async addComment(
    comment: string,
    writer: string,
    post_number: number,
  ): Promise<any> {
    const commenting = await this.commentRepository
      .createQueryBuilder()
      .insert()
      .into(Comment)
      .values({ comment: comment, writer: writer, post_number: post_number })
      .execute();
    return commenting;
  }
  //댓글 로딩
  async getComments(post_number: number): Promise<any> {
    const comments = await this.commentRepository
      .createQueryBuilder('comment')
      .select('comment.comment')
      .addSelect('comment.writer')
      .addSelect('comment.comment_number')
      .where('comment.post_number =:pn', { pn: post_number })
      .getMany();
    return comments;
  }
  //댓글 삭제
}
