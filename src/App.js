import React, { Component } from "react";
import CustomButton from "./components/customButton/CustomButton";
import TodoApp from "./components/todoApp/TodoApp";

// import logo from "./logo.svg";
// import "./App.css";

// function App() {
// 	return <div className="App"></div>;
// }

// export default App;

class App extends Component {
	constructor(props) {
		super(props);
		this.state = { count: 0 };
	}

	onMinusClick = () => {
		this.setState({ count: this.state.count - 1 });
	};
	onPlusClick = () => {
		this.setState({ count: this.state.count + 1 });
	};

	render() {
		return (
			<div>
				<CustomButton onClickHandler={this.onMinusClick} text="-" />
				{this.state.count}
				<CustomButton onClickHandler={this.onPlusClick} text="+" />

				<TodoApp />
			</div>
		);
	}
}
export default App;
