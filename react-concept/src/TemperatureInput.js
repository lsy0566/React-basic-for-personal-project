import { Component } from "react";

const scaleNames = {
    c: 'Celsius',
    f: 'Fahrenheit'
};

class TemperatureInput extends Component {

    handleChange = (e) => {
        this.props.onTemperatureChange(e.target.value)
    }

    render() {
        // Before: const { temperature } = this.state;
        const { temperature, scale } = this.props;

        return (
            <fieldset>
                <legend>Enter temperature in {scaleNames[scale]}: </legend>
                <input value={temperature}
                    onChange={this.handleChange} />
            </fieldset>
        );
    }
}

export default TemperatureInput;