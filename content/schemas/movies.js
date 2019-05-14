const schema = `
  type Movie {
    Title: String!
    Year: Int
    imdbID: String
    Poster: String
  }

  type Query {
    totalResults: Int
    Search: [Movie]!
  }
`;

export default schema;
