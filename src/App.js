import { Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./ClientSide/Components/Header/Header";
import Home from "./ClientSide/Components/Page/Home/Home";
import News from "./ClientSide/Components/Page/News/News";
import Offers from "./ClientSide/Components/Page/Offers/Offers";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/offers" element={<Offers />} />
        <Route path="/news" element={<News />} />
      </Routes>
    </div>
  );
}

export default App;
