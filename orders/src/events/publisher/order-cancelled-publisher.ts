import { Publisher, OrderCancelledEvent, Subjects } from "@2umm3r-tickets/common";

export class OrderCancelledPublisher extends Publisher<OrderCancelledEvent> {
    readonly subject = Subjects.OrderCancelled ;
}
