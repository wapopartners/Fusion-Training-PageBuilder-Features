/*  /components/features/movies/movie-list.jsx  */

import Consumer from 'fusion:consumer'
import PropTypes from 'prop-types'
import React, { Fragment, Component, } from 'react'

@Consumer
class MovieList extends Component {
  constructor (props) {
    super(props)
    this.state = { movies: [], page: 1 }
    this.fetch()
  }

  fetch () {
    const { movieQuery = "" } = this.props.customFields
      this.fetchContent({
        movies: {
          source: 'movie-list',
          query: { movieQuery: movieQuery, page: this.state.page }
        }
      })
    }

  render () {
    const { movies } = this.state
    const { headerText = "" } = this.props.customFields
    const { movieQuery = "" } = this.props.customFields

    return (
      <Fragment>
        <h2>{movieQuery}</h2>
        <div>
          {movies && movies.Search && movies.Search.map((movie, idx) =>
            <div key={`movie-${idx}`}>
              <h4>{movie.Title}</h4>
              <p><strong>Year:</strong> {movie.Year}</p>
              <img src={movie.Poster} />
            </div>
          )}
          <button onClick={() => { this.fetch() }}>More</button>
        </div>
      </Fragment>
    )
  }
}

MovieList.propTypes = {
    customFields: PropTypes.shape({
        headerText: PropTypes.string,
        movieQuery: PropTypes.string,

    })
  };
  
MovieList.static = true

export default MovieList