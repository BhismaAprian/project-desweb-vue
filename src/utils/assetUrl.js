export function assetUrl(fileName) {
  if (!fileName) return ''
  return new URL(`../assets/${fileName}`, import.meta.url).href
}
