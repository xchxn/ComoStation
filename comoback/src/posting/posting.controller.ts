import { Body, Controller, Post, Get } from '@nestjs/common';
import { PostingService } from './posting.service';

@Controller('posting')
export class PostingController {
  constructor(private readonly postingService: PostingService) {}

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
}
