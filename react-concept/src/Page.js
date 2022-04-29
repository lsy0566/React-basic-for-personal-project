import { Component } from "react";
import WarningBanner from "./WarningBanner";

class Page extends Component {
    state = {
        showWarning: true
    }

    handleToggleClick = (state) => {
        this.setState({
            showWarning: !this.state.showWarning
        });
    }

    render() {
        const {showWarning}= this.state;

        return (
            <div>
                <WarningBanner warn={showWarning} />
                <button onClick={this.handleToggleClick}>
                    {showWarning ? 'Hide' : 'Show'}
                </button>
            </div>
        )
    }
}

export default Page;