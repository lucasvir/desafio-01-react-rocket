import "./global.css";
import "./App.module.css";

import { Header } from "./components/Header/Header";
import { TodoBoard } from "./components/TodoBoard/TodoBoard";

function App() {
  return (
    <>
      <Header />
      <main>
        <TodoBoard />
      </main>
    </>
  );
}

export default App;
