import React, { Component } from 'react';
import DisplayMovies from "./DisplayMovies";
import './App.css'
class Netflix extends Component {
    render() {
        var forEachMovie =
            this.props.movieArray.map(
            eachMovieItem =>{
            return(
                <div>
                    <h2>{eachMovieItem.Name}</h2>
                    <h5>Year Released: {eachMovieItem.year}</h5>
                    <h3>Genre: {eachMovieItem.genre}</h3>
                </div>
            )
            }
            );
        return (
            <div className="App">
                <h1 class="Netflix">Welcome to Netflix</h1>
                <h3>Here are the current choices:</h3>
            <DisplayMovies choices = {forEachMovie}/>
            </div>
        );
    }
}

export default Netflix;