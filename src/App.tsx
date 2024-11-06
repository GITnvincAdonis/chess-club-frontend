export default App;

import { Route, Routes } from "react-router-dom";
import "./App.css";
import Homepage from "./assets/Routes/Homepage";

import ExecPage from "./assets/Routes/ExecPage";

function App() {
  return (
    <>
      <Routes>
        <Route path={"/"}>
          <Route
            path={"/home"}
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
