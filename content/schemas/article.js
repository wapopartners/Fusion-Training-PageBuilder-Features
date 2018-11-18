export default `
type BasicPromoItems {
  type: String
  url: String
}
type Description {
  basic: String
}
type Headlines {
  basic: String
}
type PromoItems {
  basic: BasicPromoItems
}
type Subheadlines {
  basic: String
}
type Query {
  type: String!
  version: String!
  description: Description
  headlines: Headlines
  promo_items: PromoItems
  subheadlines: Subheadlines
}
`
