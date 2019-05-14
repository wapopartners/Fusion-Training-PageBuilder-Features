import { OMDB_API_KEY } from "fusion:environment";

const resolve = query => {
  const requestUri = `https://www.omdbapi.com/?apikey=${OMDB_API_KEY}&s=${
    query.movieQuery
  }`;

  return query.hasOwnProperty("page")
    ? `${requestUri}&page=${query.page}`
    : requestUri;
};

export default {
  resolve,
  schemaName: "movies",
  params: {
    movieQuery: "text"
  }
};
