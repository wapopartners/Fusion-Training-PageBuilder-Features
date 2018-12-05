'use strict'

import React from 'react'

export default ({
  children,
  contextPath,
  deployment,
  CssLinks,
  Fusion,
  Libs,
  MetaTags
}) =>
  <html>
    <head>
      <title>Fusion Article</title>
      <MetaTags />
      <Libs />
      <CssLinks />
      <link rel='icon' type='image/x-icon' href={deployment(`${contextPath}/resources/favicon.ico`)} />
      <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css" />
    </head>
    <body>
      <div id='fusion-app'>
        {children}
      </div>
      <Fusion />
    </body>
  </html>
