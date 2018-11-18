# Properties

Properties are site-specific values that may be accessed anywhere in your bundle.

Properties are accessible on Consumers as `siteProperties`. This object will include all global properties, as well as extra or overridden site-specific values for the current site.

In case you need more control of properties for various other sites, the `fusion:properties` package exports a function which should be called with a site name and will return the properties specific to that site.

## Global values

Global values should be defined in `properties/index.js` (or `properties/index.json` if you don't need to compute any values). These values will be the defaults and will be included for all sites, unless explicitly overridden.

## Site-Specific values

Site-specific values should be defined in `properties/sites/${site}.js` (or `properties/sites/${site}.json` if you don't need to compute any values). These values will override any global values when the site is loaded.

## Example

`properties/index.json`
```json
{
  "value": "global"
}
```

`properties/sites/site1.json`
```json
{
  "value": "site1"
}
```

`components/features/my-component.jsx`
```js
import Consumer from 'fusion:consumer'

@Consumer
const MyComponent = (props) => {
  return <div>{props.siteProperties.value}</div>
}

export default Consumer
```

When used in `site1`, the result will be `<div>site1</div>`; otherwise, it will be `<div>global</div>`

`components/features/site1-component.jsx`
```js
import getProperties from 'fusion:properties'

@Consumer
const MyComponent = (props) => {
  const site1Vars = getProperties('site1')

  return <div>{site1Vars.value}</div>
}

export default Consumer
```

This will always result in `<div>site1</div>`.
