import styles from "./Header.module.css";

import logoTodo from "../../assets/todo-logo.svg";

export function Header() {
  return (
    <header className={styles.header}>
      <img src={logoTodo} alt="" />
    </header>
  );
}
