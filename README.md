## React & Graphql Challenge

I decided to use the [https://studio.apollographql.com/public/rick-and-morty-a3b90u](https://studio.apollographql.com/public/rick-and-morty-a3b90u) graphql endpoint for this challenge. You can search for different Rick and Morty Series Characters, The data is grouped by their dates of creation. In case they are created on the same day, the grouping goes as far as the hour of creation.

### Decisions
* I used Nextjs and Typescript for a lighter template and type checking
* I used Apollo client to help fetch and make graphql queries
* I used TailwindCSS for make styling faster

### Usage
* You can search for the names of characters queried from the graphql endpoint
* There are various filter options (gender, status, species, type) to get a more specific type of information on the characters
