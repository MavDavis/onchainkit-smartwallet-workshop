export function truncateText(
  text: string,
  startLength = 6,
  endLength = 4
): string {
  if (!text) return "";
  return `${text.slice(0, startLength)}...${text.slice(-endLength)}`;
}
