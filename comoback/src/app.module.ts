import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AuthController } from './auth/auth.controller';
import { AuthService } from './auth/auth.service';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { authProviders } from './auth/auth.providers';
import { databaseProviders } from './database/database.providers';
import { DatabaseModule } from './database/database.module';
//import { DatabaseModule } from './database/database.module';

@Module({
  imports: [AuthModule, DatabaseModule],
  controllers: [AuthController, AppController],
  providers: [...databaseProviders, ...authProviders, AppService, AuthService],
  exports: [...databaseProviders],
})
export class AppModule {}
