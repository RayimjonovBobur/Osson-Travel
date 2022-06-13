import { Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./ClientSide/Components/Header/Header";
import { Main } from "./ClientSide/Components/Page/Main";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        {Main.map((page) => (
          <Route path={page?.path} element={page?.page} />
        ))}
      </Routes>
    </div>
  );
}

export default App;
