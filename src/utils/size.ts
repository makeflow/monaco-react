export function Size(size: string | undefined = "100%"): string {
  return size.indexOf("%") ? size : `${size}px`;
}
