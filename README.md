# React List and Tables

[video](https://vimeo.com/928482123/68426f9111?share=copy)

The walkthrough explains how to display a list of to-dos in a table within a React application, demonstrating how lists and tables can work together to organize and display data. Here's a step-by-step breakdown:

### Step 1: Initial Setup
The demo begins with a basic "to-do list" application structure that includes a `TodoTable` component receiving an empty list as a prop. This setup lays the groundwork for displaying to-do items within a table, although the table doesn't display any data yet.

### Step 2: Creating a List of To-Dos
A constant array named `todos` is created, containing objects that represent individual to-do items. Each object has a `completed` boolean indicating the to-do status and a `description` string detailing the to-do task.

```javascript
const todos = [
  {completed: false, description: "Finished List and Tables checkpoint"},
  {completed: true, description: "Worked out this morning"},
  {completed: true, description: "Called our mother"}
];
```

### Step 3: Passing the To-Dos to the `TodoTable` Component
The `todos` array is then passed to the `TodoTable` component as a prop, replacing the previously empty list. This allows the `TodoTable` component to access and render the to-do items.

```javascript
<TodoTable todos={todos} />
```

### Step 4: Mapping To-Dos to Table Rows
Inside the `TodoTable` component, the `todos` prop is processed using the `map` method to generate a table row (`<tr>`) for each to-do item. Each row contains two table data (`<td>`) elements: one displaying the to-do `description` and the other indicating whether the task is `completed`.

```javascript
const rows = todos.map((todo, index) => (
  <tr key={index}>
    <td>{todo.description}</td>
    <td>{todo.completed ? "Yes" : "No"}</td>
  </tr>
));
```

### Step 5: Assembling the Table Structure
The table structure is assembled using `<table>`, `<thead>`, and `<tbody>` elements. The table header (`<thead>`) defines two columns: "Description" and "Completed?". The table body (`<tbody>`) then renders the `rows` created from the to-dos.

```javascript
<table>
  <thead>
    <tr>
      <th>Description</th>
      <th>Completed?</th>
    </tr>
  </thead>
  <tbody>{rows}</tbody>
</table>
```

### Step 6: Displaying Completion Status as Strings
To ensure the `completed` status is displayed as a human-readable string ("Yes" or "No") rather than a boolean value, a ternary operator is used within the mapping function to convert `true`/`false` values into corresponding strings.

```javascript
<td>{todo.completed ? "Yes" : "No"}</td>
```

### Conclusion
By following these steps, the React application successfully displays a list of to-do items within a table. Each row in the table corresponds to a to-do item, with one column displaying the task description and another indicating its completion status. This demonstrates how lists and tables can be effectively combined in React to present structured data.