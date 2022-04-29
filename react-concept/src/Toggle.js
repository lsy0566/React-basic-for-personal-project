import React, {Component} from "react";

class Toggle extends Component {

    // handleClick = this.handleClick.bind(this);

    state = {
        isToggleOn: true
    }

    handleClick = () => {
        this.setState(prevState => ({
            isToggleOn: !prevState.isToggleOn
        }));
    }

    render(){
        return(
            <button onClick={this.handleClick}>
                {this.state.isToggleOn ? 'ON' : 'OFF'}
            </button>
        );
    }
}

export default Toggle;