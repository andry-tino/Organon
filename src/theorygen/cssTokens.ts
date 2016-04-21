/**
 * Andrea Tino - 2016
 * cssTokens.ts
 */

/// <reference path="../types.ts" />

namespace organon.theorygen {
  /**
   * Represents tokens in CSS.
   */
  export const enum CssSyntaxToken {
    None
  }
  
  /**
   * Conversion.
   */
  export const textToToken : Map<CssSyntaxToken> = {
    "": CssSyntaxToken.None
  }
}
