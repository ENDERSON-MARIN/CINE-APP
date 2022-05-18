import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import "./Buscador.css";

import { getMovies, addMovieFavorite } from "../../actions";

export class Buscador extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
    };
  }

  handleChange(event) {
    this.setState({ title: event.target.value });
  }
  handleSubmit(event) {
    event.preventDefault();
    this.props.getMovies(this.state.title);
    this.setState({
      title: ""
    })
  }

  render() {
    const { title } = this.state;
    return (
      <div>
        <form className="form-container" onSubmit={(e) => this.handleSubmit(e)}>
          <div>
            <input
              type="text"
              id="title"
              autoComplete="off"
              placeholder="          Busca tus Películas acá..."
              value={title}
              onChange={(e) => this.handleChange(e)}
            />
            <br />
            <br />
            <button type="submit">BUSCAR</button>
          </div>
        </form>
        {this.props.movies === undefined ? (
          <h1>Busca tus Peliculas...</h1>
        ) : (
          <div className="pelisContainer">
            {this.props.movies.map((movie) => (
              <div key={movie.imdbID}>
                <Link to={`/movie/${movie.imdbID}`} className="linksPelis">
                  <h2>{movie.Title}</h2>
                  <img src={movie.Poster} />
                </Link>
                <br />
                <h5>Año: {movie.Year}</h5>
                <button
                  onClick={() =>
                    this.props.addMovieFavorite({
                      title: movie.Title,
                      id: movie.imdbID,
                    })
                  }
                  disabled={this.props.favorites?.find(
                    (m) => m.id === movie.imdbID
                  )}
                >
                  Add Favorites
                </button>
              </div>
            ))}
          </div>
        )}
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  movies: state.movies,
  favorites: state.favorites,
});

export default connect(mapStateToProps, { getMovies, addMovieFavorite })(
  Buscador
);
