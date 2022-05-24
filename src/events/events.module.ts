import { Module } from '@nestjs/common';
import { EventResolver } from './events.resolver';
import { EventsService } from './events.service';

@Module({
  providers: [EventResolver, EventsService],
})
export class EventsModule {}
