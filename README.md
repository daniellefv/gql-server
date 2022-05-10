# gql-server

This is project was created to put in practise some basic knowledge of how to structure a Graphql server.
It was based on the follow-book (Frontend) project and needs - possible integration in the future.

## Getting Started

First, run the development server:

```bash
npm start
# or
yarn start
```

Open [http://localhost:4000](http://localhost:4000) with your browser to see the Apollo Playground - It will be used to perform queries and mutations

learn more about in [graphql-playground](https://www.apollographql.com/docs/apollo-server/v2/testing/graphql-playground/)

## Technologies

- [JavaScript](https://www.javascript.com/)
- [GraphQL](https://graphql.org)
- [Apollo Server](https://www.apollographql.com/)

## Structure

- `/data/db` - Mocked data
- `/resolvers` - Resolvers organised by domain
- `/schema` - Schema with its defined types and inputs, also organised by domain
- `/index.js`- Server config

## TO-DO

- Add Authentication
- Replace mocked data with real connection to DB
