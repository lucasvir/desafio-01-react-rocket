import { Trash } from "@phosphor-icons/react";
import styles from "./Todo.module.css";
import { ChangeEvent } from "react";

interface TodoProps {
  content: string;
  onDeleteTodo: (todoContent: string) => void;
  onChekFinishedTodos: (isChecked: boolean) => void;
}

export function Todo({
  content,
  onChekFinishedTodos,
  onDeleteTodo,
}: TodoProps) {
  const handleDeleteTodo = () => {
    onDeleteTodo(content);
  };

  const handleChekedTodo = (event: ChangeEvent<HTMLInputElement>) => {
    onChekFinishedTodos(event.target.checked)
  };

  return (
    <div className={styles.wrapper}>
      <div className={styles.checkbox}>
        <input
          type="checkbox"
          name="todo"
          id="todo"
          onChange={handleChekedTodo}
        />
        <p>{content}</p>
      </div>

      <button onClick={handleDeleteTodo}>
        <Trash size={24} />
      </button>
    </div>
  );
}
