
import "./assets/sass/style.scss";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import DefaultLayout from "./layouts/DefaultLayout";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="*" name="main" element={<DefaultLayout />} />
      </Routes>
    </BrowserRouter>    
  );
}

export default App;
