import './App.css';

function TodoTable({todos}) {
  const rows = todos.map((todo, index) => (
    <tr key={index}>
      <td>{todo.description}</td>
      <td>{todo.completed ? "Yes" : "No"}</td>
    </tr>
  ))
  return(
    <table>
      <thead>
        <tr>
          <th>Description</th>
          <th>Completed?</th>
        </tr>
      </thead>
      <tbody>{rows}</tbody>
    </table>
  )
}

function App() {

  const todos = [
    {completed: false, description: "Finished List and Tables checkpoint"},
    {completed: true, description: "Worked out this morning"},
    {completed: true, description: "Called our mother"}
  ];

  return (
    <>
    <h1>Todo List</h1>
      <TodoTable todos={todos} />
    </>
  );
}

export default App;
