'use strict'

import React from 'react'

export default (ListType, ItemType = 'li') => ({ children }) =>
  <ListType>
    {
      children.map(
        (child) =>
          <ItemType>{child}</ItemType>
      )
    }
  </ListType>
