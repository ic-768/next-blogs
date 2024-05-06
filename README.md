A basic blog website built with NextJS

## NextBlogs

Add a .env.local file at the root of the project and add `AUTH_SECRET=some_random_string` for the auth system to work properly.

Then you just run it like any other create-next-app:

```bash
npm i && npm run dev
```

## Motivation

I created this app to get familiar with the new app router, as well as the latest react features: server components, server actions, etc..
I also used this opportunity to learn framer-motion more in-depth.

I did not add a database - I've made fullstack apps in the past and did not feel like getting into the hassle for this project.
Instead I use mock data on the server that I artificially delay to simulate network requests.
