'use strict'

const resolve = function resolve (key) {

  const website = key['arc-site'] || 'demo'
  const requestUri = `/content/v4/stories/?website_url=${key.website_url}&website=${website}`

  return (key.hasOwnProperty('published'))
    ? `${requestUri}&published=${key.published}`
    : requestUri
}

module.exports = {
  resolve,
  schemaName: 'ans-document',
  params: {website_url : 'text'}
}
