import { BrowserRouter, Route, Routes } from "react-router-dom";
import Form from "./components/Form";
import Home from "./components/Home";


function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Form email={""} password={""} />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
