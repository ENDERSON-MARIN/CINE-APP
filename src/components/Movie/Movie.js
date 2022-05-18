import React from "react";
import { connect } from "react-redux";
import { getMovieDetail } from "../../actions/index";

import "./Movie.css";

class Movie extends React.Component {
  componentDidMount() {
    console.log("Peliculas cargadas, componente montado");
    this.props.getMovieDetail(this.props.id);
  }

  componentWillMount() {
    this.props.getMovieDetail();
  }

  render() {
    return (
      <div className="movie-detail">
        <h1>Detalles de la Pelicula</h1>
        {this.props.movieDetail && (
          <div>
            <div>
              <img src={this.props.movieDetail.Poster} alt="" />
            </div>
            <div>
              <label htmlFor="">Título:</label>
              {"   "}
              <span>
                <strong>{this.props.movieDetail.Title}</strong>
              </span>
            </div>
            <div>
              <label htmlFor="">Año:</label>
              {"   "}
              <span>
                <strong>{this.props.movieDetail.Year}</strong>
              </span>
            </div>
            <div>
              <label htmlFor="">Director:</label>
              {"   "}
              <span>
                <strong>{this.props.movieDetail.Director}</strong>
              </span>
            </div>
            <div>
              <label htmlFor="">Actores:</label>
              {"   "}
              <span>
                <strong>{this.props.movieDetail.Actors}</strong>
              </span>
            </div>
            <div>
              <label htmlFor="">Género:</label>
              {"   "}
              <span>
                <strong>{this.props.movieDetail.Genre}</strong>
              </span>
            </div>
            <div>
              <label htmlFor="">Rating:</label>
              {"   "}
              <span>
                <strong>{this.props.movieDetail.imdbRating}/10</strong>
              </span>
            </div>
          </div>
        )}
      </div>
    );
  }
}

const mapStateToProps = (state) => ({ movieDetail: state.movieDetail });

export default connect(mapStateToProps, { getMovieDetail })(Movie);
