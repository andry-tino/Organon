/**
 * Andrea Tino - 2016
 * parser.ts
 */

/// <reference path="compilerOptions.ts" />
/// <reference path="error.ts" />

namespace organon.theorygen {
  /**
   * Parser for CSS providing the AST.
   * 
   * Thanks to reworkcss/css for providing the basic structure. 
   * This class is based on their work.
   * 
   * Implemented standard: http://www.w3.org/TR/CSS21/grammar.html
   */
  export class Parser {
    private options: CompilerOptions;
    private lineNumber: number;
    private columnNumber: number;
    private errors: Error[];
    
    constructor(options: CompilerOptions) {
      if (!options) {
        options = {
          silentErrors: true
        };
      }
      
      this.options = options;
      this.lineNumber = 1;
      this.columnNumber = 1;
      this.errors = [];
    }
    
    private error(message: string) {
      let err: Error = {
        reason: message,
        filename: "TODO",
        line: this.lineNumber,
        column: this.columnNumber
      };
      
      if (!this.options.silentErrors) {
        throw err;
      }
      
      this.errors.push(err);
    }
    
    // TODO: Add logic
  }
  
  /**
   * Regular expressions used by the parser.
   */
  const regexes = {
    multilineComment: /\/\*[^*]*\*+([^/*][^*]*\*+)*\//g,
    whitespace: /^\s*/,
    openBracket: /^{\s*/,
    closeBracket: /^}/
  };
}
