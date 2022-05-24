import { Injectable } from '@nestjs/common';

@Injectable()
export class EventsService {
  private events: Event[] = [];

  public getEvents(): Event[] {
    return this.events;
  }

  public getEvent(id: string): Event {
    const eventIndex = this.events.findIndex((eventItem) => eventItem.id === id);
    return this.events[eventIndex];
  }

  public createEvent(event: Event): Event {
    this.events.push(event);
    return event;
  }

  public setEventDone(event: Event): Event {
    const eventIndex = this.events.findIndex(
      (eventItem) => eventItem.id === event.id,
    );
    const eventItem = this.events[eventIndex];
    eventItem.isDone = true;
    return eventItem;
  }

  public deleteEvent(event: Event): Event {
    const eventIndex = this.events.findIndex(
      (eventItem) => eventItem.id === event.id,
    );
    const eventItem = this.events[eventIndex];
    this.events.splice(eventIndex, 1);
    return eventItem;
  }
}
