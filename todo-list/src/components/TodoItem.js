import Button from "./Button";
export default function TodoItem({
  todo,
  deleteTodo,
  toggleTodo,
  editTodo,
  selectTodo,
}) {
  return (
    <li
      onClick={selectTodo}
      className={`mb-10 d-flex flex-row justify-content-center align-items-center p-10 ${
        todo.selected ? "selected" : ""
      }  `}
    >
      <span className="flex-fill">
        {todo.content} {todo.done && "✅"}
      </span>
      <Button
        text="Valider"
        className="mr-15"
        onClick={(e) => {
          e.stopPropagation();
          toggleTodo();
        }}
      />
      <Button
        text="Modifier"
        className="mr-15"
        onClick={(e) => {
          e.stopPropagation();
          editTodo();
        }}
      />
      <Button
        text="Supprimer"
        className="mr-15"
        onClick={(e) => {
          e.stopPropagation();
          deleteTodo();
        }}
      />
    </li>
  );
}
