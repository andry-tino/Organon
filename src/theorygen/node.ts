/**
 * Andrea Tino - 2016
 * node.ts
 */

/// <reference path="nodeInfo.ts" />

namespace organon.theorygen {
  /**
   * An AST Node.
   */
  export interface Node {
    info: NodeInfo;
    children?: Node[];
  }
}
