const config = require('../config');

async function parseGistUrls(url) {
  if (url.includes('gist.github.com')){
    return true;
  } else {
    return false;
  }
}
module.exports = { parseGistUrls: parseGistUrls};
