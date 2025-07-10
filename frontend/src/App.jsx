import { BrowserRouter, Route } from "react-router";
import { MainLayout } from "./MainLayout.jsx";
import { BoardList } from "./BoardList.jsx";
import { BoardApp } from "./BoardApp.jsx";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainLayout />} />
        <Route index element={<BoardList />} />
        <Route path="board/add" element={<BoardApp />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
