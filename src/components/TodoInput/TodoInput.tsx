import { ChangeEvent, useState } from "react";
import styles from "./TodoInput.module.css";
import { PlusCircle } from "@phosphor-icons/react";

interface TodoProps {
  onSubmitNewTodo: (newTodo: string) => void;
}

export function TodoInput({ onSubmitNewTodo }: TodoProps) {
  const [newTodo, setNewTodo] = useState("");

  const handleNewTodo = (event: ChangeEvent<HTMLInputElement>) => {
    setNewTodo(event.target.value);
  };

  const handleSubmitNewTodo = () => {
    onSubmitNewTodo(newTodo);
    setNewTodo("");
  };

  return (
    <div className={styles.wrapper}>
      <input
        type="text"
        placeholder="Adicione uma nova tarefa"
        value={newTodo}
        onChange={handleNewTodo}
      />
      <button onClick={handleSubmitNewTodo}>
        Criar <PlusCircle size={16} />
      </button>
    </div>
  );
}
