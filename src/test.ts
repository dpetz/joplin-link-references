// https://github.com/commonmark/commonmark.js/
function extractLinksFromCommonMark(text) {
  const linkRegex = /\[([^\]]+)\]\(([^\)]+)\)/g;
  const matches = text.matchAll(linkRegex);
  const links = [];

  for (const match of matches) {
    const linkText = match[1];
    const url = match[2];
    links.push({ text: linkText, url: url });
  }

  return links;
}

// Example usage
const commonMarkText = `
This is a [link](https://example.com) to example website.
Here is another [link](https://openai.com) to OpenAI.
`;

const extractedLinks = extractLinksFromCommonMark(commonMarkText);
console.log(extractedLinks)
