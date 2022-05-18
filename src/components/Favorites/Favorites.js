import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { removeMovieFavorite } from "../../actions";
import "./Favorites.css";

export class ConnectedList extends Component {
  render() {
    return (
      <div>
        {/* {console.log(this.state)} */}
        {/* {console.log(this.props.favorites)} */}
        {this.props.favorites === undefined ? (
          <h1>Peliculas Favoritas...</h1>
        ) : (
          <>
            <ul>
            {this.props.favorites.map((movie) => (
              <li key={movie.id}>
                <Link to={`/movie/${movie.id}`} className="linkFav">
                  <strong>{movie.title}</strong>{"   "}
                </Link>
                <button
                  onClick={() => this.props.removeMovieFavorite(movie.id)}
                >
                  Remove of Favorites
                </button>
              </li>
            ))}
          </ul> 
          </>
        )}
      </div>
    );
  }
}

const mapStateToProps = (state) => ({ favorites: state.favorites });

export default connect(mapStateToProps, { removeMovieFavorite })(ConnectedList);
