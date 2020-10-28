const fetchPage = require('../utils/fetch-page')
const extractValue = require('../utils/cheerio-extract-value')

module.exports = async (videoId) => {
  const nig = await fetchPage({url: `https://www.youtube.com/watch?v=${videoId}`,})
  const niglet = await parseVideoInfo(nig)
  return niglet;
}

function parseVideoInfo($) {
  if (!$('.watch-main-col').children().length) {
    throw new Error('Video does not exist.')
  }

  const url = extractValue($('.watch-main-col > link[itemprop="url"]'), 'href')

  const name = extractValue($('.watch-main-col > meta[itemprop="name"]'), 'content')

  return {
    url,
    name
  }
}

