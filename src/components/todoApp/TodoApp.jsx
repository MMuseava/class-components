import React, { Component } from "react";
import "./todoApp.style.css";

class TodoApp extends Component {
	constructor(props) {
		super(props);
		this.state = {
			todos: [],
			inputText: "",
		};
	}

	handleInputChange = (e) => {
		this.setState({ inputText: e.target.value });
	};

	handleAddTodo = () => {
		const { inputText, todos } = this.state;
		if (inputText.trim() !== "") {
			const newTodo = {
				id: todos.length + 1,
				text: inputText,
				completed: false,
			};
			this.setState({
				todos: [...todos, newTodo],
				inputText: "",
			});
		}
	};

	handleDeleteTodo = (id) => {
		const updatedTodos = this.state.todos.filter((todo) => todo.id !== id);
		this.setState({ todos: updatedTodos });
	};

	handleToggleTodo = (id) => {
		const updatedTodos = this.state.todos.map((todo) =>
			todo.id === id ? { ...todo, completed: !todo.completed } : todo
		);
		this.setState({ todos: updatedTodos });
	};

	render() {
		const { todos, inputText } = this.state;
		return (
			<div className="todo-app">
				<h1 className="todo-title">Todo App</h1>
				<div className="input-container">
					<input
						className="todo-input"
						type="text"
						value={inputText}
						onChange={this.handleInputChange}
						placeholder="Add todo..."
					/>
					<button className="add-button" onClick={this.handleAddTodo}>
						Add
					</button>
				</div>
				<ul className="todo-list">
					{todos.map((todo) => (
						<div className="todo-item" key={todo.id}>
							<input
								className="todo-checkbox"
								type="checkbox"
								checked={todo.completed}
								onChange={() => this.handleToggleTodo(todo.id)}
							/>
							<span className={todo.completed ? "completed" : ""}>
								{todo.text}
							</span>
							<button
								className="delete-button"
								onClick={() => this.handleDeleteTodo(todo.id)}
							>
								Delete
							</button>
						</div>
					))}
				</ul>
			</div>
		);
	}
}

export default TodoApp;
