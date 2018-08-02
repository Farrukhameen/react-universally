import { INCREMENT_COUNTER } from "./constants";

export const incrementCounter = counter => ({
  type: INCREMENT_COUNTER,
  counter,
});