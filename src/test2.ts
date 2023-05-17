function convertInlineToReferenceLinks(text) {
  const linkRegex = /\[([^\]]+)\]\(([^\)]+)\)/g;
  let referenceLinks = [];
  let index = 0;

  const convertedText = text.replace(linkRegex, (match, linkText, url) => {
    const referenceKey = `[${index}]`;
    referenceLinks.push({ key: referenceKey, text: linkText, url: url });
    index++;
    return referenceKey;
  });

  const convertedTextWithReferences = referenceLinks.reduce(
    (result, link) => `${result}\n[${link.key}]: ${link.url} "${link.text}"`,
    convertedText
  );

  return convertedTextWithReferences;
}

// Example usage
const commonMarkText = `
This is a [link](https://example.com) to example website.
Here is another [link](https://openai.com) to OpenAI.
`;

const convertedText = convertInlineToReferenceLinks(commonMarkText);
console.log(convertedText);
