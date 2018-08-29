export class EditorPositionInfo {
  startIndex: number;
  endIndex: number;
  startLine: number;
  endLine: number;

  constructor() {
    this.startIndex = -1;
    this.endIndex = -1;
    this.startLine = -1;
    this.endLine = -1;
  }

  isExist(value: number): boolean {
    return value === -1;
  }
}
