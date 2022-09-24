export const textCut = (text) => {
  if (text.length > 100) {
    return `${text.substring(0, 50)}...`;
  }
  return text;
}