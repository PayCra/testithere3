import React from 'react';
import './App.css';

//this is a test of the way objects work, basically. Whether you can nest key value pairs in properties.

class App extends React.Component {

    state = {
        obsession: {
            title: "Chén Qíng Lìng",
            favorites: {
                character: ["Nie Huaisang", "Lan Xichen", "Jin Guangyao", "Jiang Cheng"],
                ship: ["Xiyao", "Sangcheng", "Xisang"],
                sect: ["Gusu Lan", "Yunmeng Jiang"]
            },
            leastFavorites: {
                character: "Jin Guangshan",
                ship: "Songxiao",
                sect: "Jin"
            }
        }
    }

    //nie można dwóch elementów przypisać do jednego key? trzeba je włożyć w array, jeśli mam na to ochotę?
    //nie można używać myślników w nazwach keys?

    //should there be a way to make these things smaller?

    render() {
        return (
            <div>
                Hi, my recent obsession is {this.state.obsession.title}.<br/>
                My favorite character is {this.state.obsession.favorites.character[0]}, although I love them only a
                little bit more than {this.state.obsession.favorites.character
                .slice(1, this.state.obsession.favorites.character.length - 1)
                .join(", ")} and {this.state.obsession.favorites.character[this.state.obsession.favorites.character.length - 1]}.<br/>
                My favorite ships
                are {this.state.obsession.favorites.ship.slice(0, this.state.obsession.favorites.ship.length - 1).join(", ")} and {this.state.obsession.favorites.ship[this.state.obsession.favorites.ship.length - 1]},
                but I'll take anything with {this.state.obsession.favorites.character[0]}.<br/>
                My favorite sect is {this.state.obsession.favorites.sect[0]},
                although {this.state.obsession.favorites.sect[1]} probably fits me better.
                <br/>
                <br/>
                My least favorite character is {this.state.obsession.leastFavorites.character}.<br/>
                My least favorite ship is {this.state.obsession.leastFavorites.ship}.<br/>
                My least favorite sect is {this.state.obsession.leastFavorites.sect}.<br/>
                <br/>
                As is evident, I love much more than I dislike about the world of {this.state.obsession.title}.
            </div>
        )
    }
}

export default App;
