import { gql } from "@apollo/client";
const GET_CHARACTERS = gql`
  query ExampleQuery($filter: FilterCharacter) {
    characters(filter: $filter) {
      results {
        gender
        created
        name
        id
        type
        image
        status
        species
        location {
          name
        }
      }
      info {
        pages
      }
    }
  }
`;

export { GET_CHARACTERS };
