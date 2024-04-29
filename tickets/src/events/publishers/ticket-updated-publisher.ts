import { Publisher, Subjects, TicketUpdatedEvent } from "@2umm3r-tickets/common";

export class TicketUpdatedPublisher extends Publisher<TicketUpdatedEvent> {
    readonly subject = Subjects.TicketUpdated;
}
