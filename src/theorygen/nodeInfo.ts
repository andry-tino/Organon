/**
 * Andrea Tino - 2016
 * nodeInfo.ts
 */

namespace organon.theorygen {
  /**
   * An AST node info.
   */
  export interface NodeInfo {
    lineStart: number;
    lineEnd: number;
    columnStart: number;
    columnEnd: number;
    kind: SyntaxKind;
  }
  
  /**
   * Types of nodes
   */
  export const enum SyntaxKind {
    Statement,
    Selector
  }
}
