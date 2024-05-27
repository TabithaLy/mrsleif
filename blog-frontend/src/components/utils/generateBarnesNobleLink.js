function generateBarnesNobleLink(title, author) {
    const searchQuery = `${title} ${author}`.replace(/\s+/g, '%20');
    return `https://www.barnesandnoble.com/s/${searchQuery}`;
}

module.exports = { generateBarnesNobleLink };