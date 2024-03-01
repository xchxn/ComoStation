import { Injectable, Inject } from '@nestjs/common';
import { Repository } from 'typeorm';
import { Post } from './post.entity';

@Injectable()
export class PostingService {
  constructor(
    @Inject('POST_REPOSITORY')
    private postRepository: Repository<Post>,
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
  async getPosts(): Promise<any> {
    const post = await this.postRepository
      .createQueryBuilder()
      .select()
      .execute();
    console.log(post);
    return post;
  }
}
