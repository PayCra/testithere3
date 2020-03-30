import React from 'react';
import './App.css';
import './Colors.css';
import One from "./Components/One";
import Two from "./Components/Two";

let blublu = prompt("Gimme number:");

class App extends React.Component {

    state = {
        rotation: {}
    };

    handleClick = () => {
        this.setState({rotation: this.rotation})
    };

    rotation = {
        transform: "rotate(" + blublu*30 + "deg)"
    };

    render() {
        return (
            <div>
                <One rotation={this.state.rotation}/>
                <Two
                    handleClick={this.handleClick}
                />
            </div>
        )

    }
}

export default App;
