import { Component } from "react";

class FlavorForm extends Component {
    state = {
        value: 'coconut'
    }

    handleChange = (e) => {
        this.setState({
            value: e.target.value
        });
    }

    handleSubmit = (e) => {
        alert('당신이 가장 좋아하는 것은: ' + this.state.value);
        e.preventDefault();
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <label>
                    당신이 좋아하는 것을 고르세요. :
                    <select value={this.state.value} onChange={this.handleChange}>
                        <option value="grapefruit">포도</option>
                        <option value="lime">라임</option>
                        <option value="coconut">코코넛</option>
                        <option value="mango">망고</option>
                    </select>
                </label>
                <input type="submit" value="Submit" />
            </form>
        )
    }
}

export default FlavorForm;