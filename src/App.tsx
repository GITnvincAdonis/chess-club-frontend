export default App;

import { Route, Routes } from "react-router-dom";
import "./App.css";
import Homepage from "./assets/Routes/Homepage";
import NavBar from "./assets/MyComponents/NavBar";

function App() {
  return (
    <>
      <Routes>
        <Route path={"/"} element={<NavBar></NavBar>}>
          <Route path={"/"} element={<Homepage />}></Route>
        </Route>
      </Routes>
    </>
  );
}
