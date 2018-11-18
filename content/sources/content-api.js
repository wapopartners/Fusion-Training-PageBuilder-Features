const resolve = (key) => {
  const requestUri = `/content/v4/stories/?website_url=${ key.website_url || key }&website=demo`;

  return (key.hasOwnProperty('published')) ? `${requestUri}&published=${key.published}` : requestUri
}

export default {
  resolve,
  schemaName: 'article',
  params: {
    website_url : 'text',
    published: 'text'
  }
}
