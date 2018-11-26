# fusion-08

On this branch, we've made some significant changes to our Card feature, updating it to fetch content individually for each instance of the feature. This means that we can configure multiple card features per page and each one can render its own content. Now, we're ready to introduce one more major layout component: Chains.

## User story
As a user, I would like to group features together to create more complex layouts.

## Concepts
- Chains
- Using multiple features

## New Files on this branch
- `/components/chains/default.jsx`
- `/components/chains/double-chain.jsx`

## What's next?
This branch gives us the major components for creating a manually curated page (albeit a simple one) within PageBuilder. But what about rendering a full article? Switch to branch `fusion-09` to see one way to prototype an article body feature in just a few commands.
