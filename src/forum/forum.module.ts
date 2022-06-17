import { Module } from '@nestjs/common';
import { DiscordModule } from '@discord-nestjs/core';
import { ConfigModule } from '@nestjs/config';
import { PioneerGraphQLModule } from 'src/gql/pioneer.module';
import { ThreadCreatedHandler } from './thread.created.handler';
import { PostCreatedHandler } from './post.created.handler';
import { EventEmitterModule } from '@nestjs/event-emitter';

@Module({
  imports: [
    DiscordModule.forFeature(), 
    EventEmitterModule.forRoot(),
    ConfigModule.forRoot(),
    PioneerGraphQLModule
  ],
  providers: [ThreadCreatedHandler, PostCreatedHandler],
})
export class ForumModule {}