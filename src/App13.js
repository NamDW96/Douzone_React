import { Component } from "react";
import LifeCycleSample from "./LifeCycleSample";
import ErrorBouoadry from "./ErrorBoundary";


function getRandomColor() {
    return '#'+ Math.floor(Math.random() * 16777215).toString(16);
}

class App extends Component {
    state = {
        color: '#000000'
    };

    handleClick = () => {
        this.setState({
            color : getRandomColor()
        });
    };

    render() {
        return(
            <div>
                <button onClick={this.handleClick}>랜덤 색상</button>
                <ErrorBouoadry>
                    <LifeCycleSample color = {this.state.color}/>
                </ErrorBouoadry>
            </div>
        );
    }
}

export default App;