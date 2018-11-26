# fusion-08

On this branch, we've made some significant changes to our Card feature, updating it to fetch content individually for each instance of the feature. This means that we can configure multiple card features per page and each one can render its own content.

## User story
As a user, I would like to be able to configure the content of my feature dynamically.

## Concepts
- getContent
- fetchContent
- setContent

## New Files on this branch
- `/features/global/card/default.jsx`

## What's next?
Now that we can render multiple instances of a feature, it's time to add some complexity to our layouts. We'll do that by introducing a new type of component: Chains. Switch to branch `fusion-09` to see how!
