import { BrowserRouter, Route } from "react-router";

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
