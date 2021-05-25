export function prepareLink(url: string) {
  if (url.match(/https?/)) {
    return url;
  }

  return `https://${url}`;
}
