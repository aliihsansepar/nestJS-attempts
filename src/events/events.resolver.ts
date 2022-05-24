import { Query, Resolver } from '@nestjs/graphql';
import { EventsService } from './events.service';

@Resolver(() => Event)
export class EventResolver {
  constructor(private readonly eventService: EventsService) {}

  @Query(() => [Event], { name: 'events', nullable: 'items' })
  getEvents(): Event[] {
    return this.eventService.getEvents();
  }
  @Query(() => Event, { name: 'event', nullable: true })
  getEvent(id: string): Event {
    return this.eventService.getEvent(id);
  }
}
