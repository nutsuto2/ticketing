import { Subjects, Publisher, PaymentCreatedEvent } from "@2umm3r-tickets/common";

export class PaymentCreatedPublisher extends Publisher<PaymentCreatedEvent> {
    readonly subject = Subjects.PaymentCreated;
}
