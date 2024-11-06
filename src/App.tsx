export default App;

import { Route, Routes, useNavigate } from "react-router-dom";
import "./App.css";
import Homepage from "./assets/Routes/Homepage";

import ExecPage from "./assets/Routes/ExecPage";
import { useEffect } from "react";

function App() {
 
  return (
    <>
      <Routes>
        <Route path={"/"}>
          <Route
            path={"/"}
            element={
              <>
                <Homepage />
              </>
            }
          ></Route>
          <Route
            path={"/ExecPage"}
            element={
              <>
                <ExecPage />
              </>
            }
          ></Route>
        </Route>
      </Routes>
    </>
  );
}
