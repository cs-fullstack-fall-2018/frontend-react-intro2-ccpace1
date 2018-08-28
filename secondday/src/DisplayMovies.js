import React, { Component } from 'react';

class DisplayMovies extends Component {
    render() {
        return (
            <div className="App">
                {this.props.choices}
            </div>
        );
    }
}

export default DisplayMovies;