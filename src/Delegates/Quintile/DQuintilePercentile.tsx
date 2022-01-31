import { IDQuintile } from "./IDQuintile";

export class DQuintilePercentile implements IDQuintile {
  percentile: number

  constructor(percentile: number) {
    this.percentile = percentile
  }

  getQuintile()  {
    return Math.floor(this.percentile / 20) + 1
  }
}