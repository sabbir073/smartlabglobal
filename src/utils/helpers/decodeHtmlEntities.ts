export default function decodeHtmlEntities(str: string): string {
  if (!str || typeof str !== "string") return ""

  return str
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">")
    .replace(/&amp;/g, "&")
    .replace(/&quot;/g, '"')
    .replace(/&#039;/g, "'");
}
