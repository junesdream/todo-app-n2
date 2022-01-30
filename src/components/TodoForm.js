import React, { useState, useEffect, useRef } from "react";

const TodoForm = (props) => {
	const [input, setInput] = useState(props.edit ? props.edit.value : '');

    const inputRef = useRef(null, "input");
    useEffect(() => {
        inputRef.current.focus()
    })

	const handleChange = (e) => {
		setInput(e.target.value);
	};

	const handleSubmit = (e) => {
		e.preventDefault();

		props.onSubmit({
			id: Math.floor(Math.random() * 10000),
			text: input
		});

		setInput("");
	};

	return (
		<form action=" " className="todo-form" onSubmit={handleSubmit}>
			{props.edit ? (
				<>
					<input
						type="text"
						className="todo-input edit"
						name="text"
						placeholder="Update your item"
						value={input}
						onChange={handleChange}
						ref={inputRef}
					/>
					<button className="todo-button edit">Update</button>
				</>
			) : (
				<>
					<input
						type="text"
						className="todo-input"
						name="text"
						placeholder="Add a todo"
						value={input}
						onChange={handleChange}
						ref={inputRef}
					/>
					<button className="todo-button">Add todo</button>
				</>
			)}
		</form>
	);
};

export default TodoForm;
