import React from "react";

class CustomButton extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<button onClick={this.props.onClickHandler} className="custom-button">
				{this.props.text}
			</button>
		);
	}
}
export default CustomButton;
