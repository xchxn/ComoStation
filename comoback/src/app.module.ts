import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AuthController } from './auth/auth.controller';
import { AuthService } from './auth/auth.service';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { authProviders } from './auth/auth.providers';
import { databaseProviders } from './database/database.providers';
import { DatabaseModule } from './database/database.module';
import { PostingService } from './posting/posting.service';
import { PostingController } from './posting/posting.controller';
import { postProviders } from './posting/post.providers';
//import { DatabaseModule } from './database/database.module';

@Module({
  imports: [AuthModule, DatabaseModule],
  controllers: [AuthController, AppController, PostingController],
  providers: [
    ...databaseProviders,
    ...authProviders,
    ...postProviders,
    AppService,
    AuthService,
    PostingService,
  ],
  exports: [...databaseProviders],
})
export class AppModule {}
