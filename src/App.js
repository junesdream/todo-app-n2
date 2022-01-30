import React from "react";
import "./App.css";
// import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";
import Footer from "./components/Footer";
// import Background from './assets/background.mp4'

function App() {
	return (
		<div>
			{/* <video src={Background} autoPlay loop muted /> */}
			<div className="todo-app">
				{/* <TodoForm /> */}
				<TodoList />
			</div>
			<Footer />
		</div>
	);
}

export default App;
