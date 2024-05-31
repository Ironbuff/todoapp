import '../reset.css';
import '../App.css';
import { useState } from 'react';

function App() {
  const [todos, setTodos] = useState([
    {
      id: 1,
      title: 'Finish React lessons', 
      isComplete: false,
    },
    {
      id: 2,
      title: 'Go grocery shopping', 
      isComplete: true,
    },
    {
      id: 3,
      title: 'Finish task', 
      isComplete: false,
    },
  ]);

  const [todoInput, setTodoInput] = useState('');
  const [idForTodo, setIdForTodo] = useState(4); // Start from 4 since we have 3 todos initially

  function addToDo(event) {
    event.preventDefault(); // Prevent default form submission

    setTodos([...todos, {
      id: idForTodo, // Use idForTodo for unique ID
      title: todoInput, // Use user input for title
      isComplete: false,
    }]);
  
    setTodoInput(''); // Clear input after adding
    setIdForTodo(prevId => prevId + 1); // Increment ID for next todo
  }
  //in the above function in below jsx we pass the method using callback that is {()=> deletetodo(id)} then define the method
  function deleteTodo(id) {
    setTodos([...todos].filter(todo => todo.id !== id));// this first loads the todos then filters item with selected todo.id
  }

  function handleInput(event) {
    setTodoInput(event.target.value); // Update state with user input
  }

  return (
    <>
      <div className="todo-app-container">
        <div className="todo-app">
          <h2>Todo App</h2>
          <form action="#" onSubmit={addToDo}>
            <input 
              type="text" 
              value={todoInput} 
              onChange={handleInput} 
              className="todo-input" 
              placeholder="What do you need to do?"
            />
          </form>
          <ul className="todo-list">
            {todos.map((todo) => (
              <li key={todo.id} className="todo-item-container">
                <div className="todo-item">
                  <input type="checkbox" />
                  <span className="todo-item-label">{todo.title}</span>
                </div>
                <button onClick={()=>deleteTodo(todo.id)} className="x-button">
                  <svg
                    className="x-button-icon"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </button >
              </li>
            ))}
          </ul>
          <div className="check-all-container">
            <div>
              <div className="button">Check All</div>
            </div>
            <span>{todos.filter(todo => !todo.isComplete).length} items remaining</span>
          </div>
          <div className="other-buttons-container">
            <div>
              <button className="button filter-button filter-button-active">
                All
              </button>
              <button className="button filter-button">Active</button>
              <button className="button filter-button">Completed</button>
            </div>
            <div>
              <button className="button">Clear completed</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
