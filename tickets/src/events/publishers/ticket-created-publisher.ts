import { Publisher, Subjects, TicketCreatedEvent } from "@2umm3r-tickets/common";

export class TicketCreatedPublisher extends Publisher<TicketCreatedEvent> {
    readonly subject = Subjects.TicketCreated;
}
