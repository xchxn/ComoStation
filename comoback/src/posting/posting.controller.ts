import { Param, Body, Controller, Post, Get, UseGuards } from '@nestjs/common';
import { PostingService } from './posting.service';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';

@Controller('posting')
export class PostingController {
  constructor(private readonly postingService: PostingService) {}

  @UseGuards(JwtAuthGuard)
  @Post('posting')
  posting(
    @Body() data: { title: string; content: string; writer: string },
  ): any {
    return this.postingService.posting(data.title, data.content, data.writer);
  }
  @Get('getPosts')
  getPosts(): any {
    return this.postingService.getPosts();
  }
  @Get('viewPost/:id')
  viewPost(@Param('id') params: any): any {
    return this.postingService.viewPost(params);
  }

  @UseGuards(JwtAuthGuard)
  @Post('addComment')
  addComment(
    @Body() data: { comment: string; writer: string; post_number: number },
  ): any {
    return this.postingService.addComment(
      data.comment,
      data.writer,
      data.post_number,
    );
  }
  @Get('getComments/:id')
  getComments(@Param('id') postNum: number): any {
    return this.postingService.getComments(postNum);
  }
}
