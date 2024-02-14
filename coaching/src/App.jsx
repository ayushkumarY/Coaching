import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./component/Login";
import Signup from "./component/Signup";
import Home from "./component/Home";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/Home" element={<Home />}></Route>
          <Route path="/Signup" element={<Signup />} />
          <Route path="*" element={<div>Not found</div>}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
