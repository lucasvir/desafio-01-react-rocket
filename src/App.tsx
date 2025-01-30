import { Header } from "./components/Header/Header";
import { TodoInput } from "./components/TodoInput/TodoInput";

import "./global.css";
import "./App.module.css";
import { TodoBoard } from "./components/TodoBoard/TodoBoard";

function App() {
  return (
    <>
      <Header />
      <main>
        <TodoInput />
        <TodoBoard />
      </main>
    </>
  );
}

export default App;
