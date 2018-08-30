interface PositionInfo {
  startIndex: number;
  endIndex: number;
  startLine: number;
  endLine: number;
}

export class EditorPositionInfo {
  startIndex: number = -1;
  endIndex: number = -1;
  startLine: number = -1;
  endLine: number = -1;

  updateAll(
    startIndex: number,
    endIndex: number,
    startLine: number,
    endLine: number
  ): void {
    this.startIndex = startIndex;
    this.endIndex = endIndex;
    this.startLine = startLine;
    this.endLine = endLine;
  }

  getAll(): PositionInfo {
    return {
      startIndex: this.startIndex,
      endIndex: this.endIndex,
      startLine: this.startLine,
      endLine: this.endLine
    };
  }
}
