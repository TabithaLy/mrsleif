function generateAmazonLink(title, author) {
    const searchQuery = `${title} ${author}`.replace(/\s+/g, '+');
    return `https://www.amazon.com/s?k=${searchQuery}`;
}

module.exports = { generateAmazonLink };