import './App.css';
import {Route, Routes} from "react-router-dom"
import Main from "./Pages/Main/Main"
import Home from "./Pages/Home/Home"
import About from "./Pages/About/About"

function App() {
  return (
    <Routes>

      <Route path="/" element={<Main/>}/>
      <Route path="/home" element={<Home/>}/>
      <Route path="/about" element={<About/>}/>

    </Routes>
  );
}

export default App;
