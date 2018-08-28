import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import Netflix from './Netflix';
import DisplayMovies from './DisplayMovies'

class App extends Component {
    render() {
        var movies =
            [
                {
                    Name: "Shooter",
                    year: 2007,
                    genre: "Drama/Thriller"
                },
                {
                    Name: "Kingsman: The Secret Service",
                    year: 2014,
                    genre: "Crime/Sci-fi"
                },
                {
                    Name: "Lone Survivor",
                    year: 2013,
                    genre: "Drama/Thriller",
                }
            ];
        return (
            <div className="App">
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo"/>
                    <h1 className="App-title">Welcome to React</h1>
                </header>
                <Netflix movieArray={movies}/>
                <DisplayMovies/>
            </div>
        );
    }
}

export default App;
//Create a new component called Netflix from App.js. In Netflix create an array of collections for movies.
// Include movieName, yearReleased, and genre for three collections.
// Pass that array of collections to a child component, DisplayMovies.
// In DisplayMovies, return each element's key in any way you like.