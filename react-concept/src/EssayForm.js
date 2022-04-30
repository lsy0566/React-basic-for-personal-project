import { Component } from "react";

class EssayForm extends Component {
    state = {
        value: '기본 값 입력하기.'
    };

    handleChange = (e) => {
        this.setState({
            value: e.target.value
        });
    }

    handleSubmit = (e) => {
        alert('에세이는 제출되어졌다. : ' + this.state.value);
        e.preventDefault();
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <label>
                    Essay:
                    <textarea
                        placeholder={this.state.value}
                        // value={this.state.value}
                        onChange={this.handleChange} />
                </label>
                <input type="submit" value="Submit" />
            </form>
        )
    }
}

export default EssayForm;