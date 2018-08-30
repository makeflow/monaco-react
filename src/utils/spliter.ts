import { editorPositionInfo } from "../build-service";
import { editorStore } from "../build-stores";

interface SelectPosition {
  minIndex: number;
  maxIndex: number;
}

export function createSymbol(
  attachSymbol: string,
  attachSymbolCount: number,
  hasSpace: boolean,
  spacePosition?: "begin" | "end"
): string {
  let replaceText = "";

  for (let i = 0; i < attachSymbolCount; i++) {
    replaceText += attachSymbol;
  }

  if (!hasSpace) {
    return replaceText;
  }

  if (spacePosition === "begin") {
    return ` ${replaceText}`;
  } else if (spacePosition === "end") {
    return `${replaceText} `;
  } else {
    return `${replaceText}`;
  }
}

function getSelectPosition(
  startIndex: number,
  endIndex: number,
  startLine: number,
  endLine: number,
  content: string
): SelectPosition {
  const contentParts = content.split("\n");

  let count = Math.abs(startLine - endLine);
  let charCount = 0;

  for (let i = 0; i < count; i++) {
    charCount += contentParts[Math.min(startLine, endLine) + i].length;
  }

  let maxIndex: number | undefined;
  let minIndex: number | undefined;

  if (Math.max(startIndex, endIndex) === startIndex) {
    [maxIndex, minIndex] = [startIndex, endIndex];
  } else {
    [minIndex, maxIndex] = [startIndex, endIndex];
  }

  return { maxIndex, minIndex: minIndex + charCount + count };
}

export function getSelectText(
  startIndex: number,
  endIndex: number,
  startLine: number,
  endLine: number,
  content: string
): string {
  const { minIndex, maxIndex } = getSelectPosition(
    startIndex,
    endIndex,
    startLine,
    endLine,
    content
  );

  return content.slice(minIndex, maxIndex);
}

function divisionMaxMin(
  num1: number,
  num2: number
): { min: number; max: number } {
  if (Math.max(num1, num2) === num1) {
    return { max: num1, min: num2 };
  } else {
    return { max: num2, min: num1 };
  }
}

function joinContent(symbol: string, content: string, index: number): string {
  return [
    content.slice(0, index),
    symbol,
    content.slice(index, content.length)
  ].join("");
}

export function attachSymbol(
  leftSymbol: string,
  rightSymbol: string,
  isCode?: boolean
): string {
  let {
    startIndex,
    endIndex,
    startLine,
    endLine
  } = editorPositionInfo.getAll();

  if (isCode) {
    rightSymbol = leftSymbol = startLine !== endLine ? "```" : "`";
  }

  let { max: maxLine, min: minLine } = divisionMaxMin(startLine, endLine);
  let { max: maxIndex, min: minIndex } = divisionMaxMin(startIndex, endIndex);
  let content = editorStore.content;
  let contentParts = content.split("\n");

  contentParts[minLine] = joinContent(
    leftSymbol,
    contentParts[minLine],
    minIndex
  );

  contentParts[maxLine] = joinContent(
    rightSymbol,
    contentParts[maxLine],
    maxIndex + leftSymbol.length
  );

  return contentParts.join("\n");
}
