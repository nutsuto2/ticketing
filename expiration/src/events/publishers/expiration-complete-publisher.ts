import { Publisher, Subjects, ExpirationCompleteEvent } from "@2umm3r-tickets/common";

export class ExpirationCompletePublisher extends Publisher<ExpirationCompleteEvent> {
    readonly subject = Subjects.ExpirationComplete;
}