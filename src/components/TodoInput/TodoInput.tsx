import styles from "./TodoInput.module.css";
import { PlusCircle } from "@phosphor-icons/react";

export function TodoInput() {
  return (
    <div className={styles.wrapper}>
      <input type="text" placeholder="Adicione uma nova tarefa" />
      <button>
        Criar <PlusCircle size={16} />
      </button>
    </div>
  );
}
