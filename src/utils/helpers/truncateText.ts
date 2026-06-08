function truncateText(text: string, limit: number = 100): string {
  if (!text || typeof text !== 'string') return '';
  text = text.toString().trim();
  if (text.length <= limit) return text;
  return text.slice(0, limit) + '...';
}

export default truncateText;