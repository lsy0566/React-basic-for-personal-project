import { Component } from "react";

class Reservation extends Component {
    state = {
        isGoing: true,
        numberOfGuests: 2
    };

    handleInputChange = (e) => {
        const target = e.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        // 엘리먼트의 타입이 checkbox이면 checked를 실행하고 아니면 상태값에 엘리먼트의 value 값을 넣는다.
        const name = target.name;

        this.setState({
            [name]: value
        });
    }

    render() {
        return (
            <form>
                <label>
                    Is going:
                    <input
                        name="isGoing"
                        type="checkbox"
                        checked={this.state.isGoging}
                        onChange={this.handleInputChange} />
                </label>
                <br />
                <label>
                    Number of guests:
                    <input
                        name="numberOfGuests"
                        type="number"
                        value={this.state.numberOfGuests}
                        onChange={this.handleInputChange} />
                </label>
            </form>
        );
    }
}

export default Reservation;