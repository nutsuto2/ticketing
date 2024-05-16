import { Publisher, OrderCreatedEvent, Subjects } from "@2umm3r-tickets/common";

export class OrderCreatedPublisher extends Publisher<OrderCreatedEvent> {
    readonly subject = Subjects.OrderCreated ;
}
