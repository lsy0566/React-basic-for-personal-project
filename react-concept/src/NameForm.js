import { Component } from "react";

class NameForm extends Component {
    state = {
        value: ''
    }

    handleChange = (e) => {
        this.setState({
            value: e.target.value
        });
    }

    handleSubmit = (e) => {
        alert('이름이 제출 되어졌다.: ' + this.state.value);
        e.preventDefault();
    }

    render() {
        
        return (
            <form onSubmit={this.handleSubmit}>
                <label>
                    Name:
                    <input type="text"
                        value={this.state.value}
                        onChange={this.handleChange} />
                </label>
                <input type="submit"
                    value="Submit" />
            </form>
        )
    }
}

export default NameForm;