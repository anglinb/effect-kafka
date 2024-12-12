/**
 * @since 0.1.0
 */
import { Data } from "effect";
import type * as ConsumerRecord from "./ConsumerRecord.js";

/**
 * @since 0.1.0
 * @category error
 */
export type ConsumerError = RouteNotFound;

/**
 * @since 0.1.0
 * @category error
 */
export class RouteNotFound extends Data.TaggedError("RouteNotFound")<{
  readonly payload: ConsumerRecord.ConsumerRecord;
}> {
  constructor(options: { payload: ConsumerRecord.ConsumerRecord }) {
    super(options);
    (this as any).stack = `${this.name}: ${this.message}`;
  }
  get message() {
    return `${this.payload.topic} handler not found`;
  }
}

/**
 * @since 0.6.0
 * @category error
 */
export class ConsumerCommitError extends Data.TaggedError("ConsumerCommitError")<{
  readonly message: string;
}> {
  constructor(options: { readonly message: string; readonly stack?: string }) {
    super(options);
    (this as any).stack = options.stack ?? `${this.name}: ${this.message}`;
  }
}
