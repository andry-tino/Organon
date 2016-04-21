/**
 * Andrea Tino - 2016
 * error.ts
 */

namespace organon.theorygen {
  /**
   * An error.
   */
  export interface Error {
    reason?: string;
    filename: string;
    line: number;
    column: number;
    source?: string;
  }
}
