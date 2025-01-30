import { Notepad } from "@phosphor-icons/react";
import styles from "./TodoBoard.module.css";

export function TodoBoard() {
  return (
    <div className={styles.wrapper}>
      <header className={styles.header}>
        <div className={styles.title_created}>
          <p>Tarefas criadas</p>
          <span className={styles.title_count}>0</span>
        </div>
        <div className={styles.title_finished}>
          <p>Concluídas</p>
          <span className={styles.title_count}>0</span>
        </div>
      </header>

      <div className={styles.board}>
        <figure>
          <Notepad size={62} />
        </figure>
        <strong>Você ainda não tem tarefas cadastradas</strong>
        <p>Crie tarefas e organize seus itens a fazer</p>
      </div>
    </div>
  );
}
