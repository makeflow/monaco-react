interface SelectPosition {
  minIndex: number;
  maxIndex: number;
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

export function replaceSelectText(
  startIndex: number,
  endIndex: number,
  startLine: number,
  endLine: number,
  attachSymbol: string,
  content: string
): string {
  const { minIndex, maxIndex } = getSelectPosition(
    startIndex,
    endIndex,
    startLine,
    endLine,
    content
  );

  const selectText = content.slice(minIndex, maxIndex);

  return content.replace(
    selectText,
    [attachSymbol, selectText, attachSymbol].join("")
  );
}
