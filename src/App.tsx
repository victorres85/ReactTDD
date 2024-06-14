import { BrowserRouter, Route, Routes } from "react-router-dom";
import { RecoilRoot } from "recoil";
import Home from "./Components/Pages/Home";
import Draw from "./Components/Pages/Draw";
function App() {
  return (
    <BrowserRouter>
      <RecoilRoot>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/draw" element={<Draw />} />
        </Routes>
      </RecoilRoot>
    </BrowserRouter>
  );
}

export default App;
