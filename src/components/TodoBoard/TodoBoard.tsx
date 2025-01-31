import styles from "./TodoBoard.module.css";
import { Notepad } from "@phosphor-icons/react";
import { Todo } from "../Todo/Todo";
import { TodoInput } from "../TodoInput/TodoInput";
import { useState } from "react";

export function TodoBoard() {
  const [todos, setTodos] = useState<string[]>([]);
  const [todosCount, setTodosCount] = useState(0);
  const [todosFinishedCount, setTodosFinishedCount] = useState(0);

  const onSubmitNewTodo = (newTodo: string) => {
    setTodos([...todos, newTodo]);
    setTodosCount(todos.length + 1);
  };

  const onDeleteTodo = (todoContent: string) => {
    const newTodoList = todos.filter((todo) => todo !== todoContent);
    setTodos(newTodoList);
    setTodosCount(todos.length - 1);
  };

  const onChekFinishedTodos = (isChecked: boolean) => {
    isChecked
      ? setTodosFinishedCount(todosFinishedCount + 1)
      : setTodosFinishedCount(todosFinishedCount - 1);
  };

  return (
    <>
      <TodoInput onSubmitNewTodo={onSubmitNewTodo} />

      <div className={styles.wrapper}>
        <header className={styles.header}>
          <div className={styles.title_created}>
            <p>Tarefas criadas</p>
            <span className={styles.title_count}>{todosCount}</span>
          </div>
          <div className={styles.title_finished}>
            <p>Concluídas</p>
            <span className={styles.title_count}>{todosFinishedCount}</span>
          </div>
        </header>

        <div className={styles.board}>
          {todos.map((todo) => (
            <Todo
              key={todo}
              content={todo}
              onChekFinishedTodos={onChekFinishedTodos}
              onDeleteTodo={onDeleteTodo}
            />
          ))}

          <div className={`${styles.background} ${styles.disbaled}`}>
            <figure>
              <Notepad size={62} />
            </figure>
            <strong>Você ainda não tem tarefas cadastradas</strong>
            <p>Crie tarefas e organize seus itens a fazer</p>
          </div>
        </div>
      </div>
    </>
  );
}
