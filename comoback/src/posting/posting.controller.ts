import { Body, Controller, Post } from '@nestjs/common';
import { PostingService } from './posting.service';

@Controller('posting')
export class PostingController {
  constructor(private readonly postingService: PostingService) {}

  @Post()
  getHello(
    @Body() data: { title: string; content: string; writer: string },
  ): any {
    return this.postingService.posting(data.title, data.content, data.writer);
  }
}
