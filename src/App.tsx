export default App;

import { Route, Routes } from "react-router-dom";
import "./App.css";
import Homepage from "./assets/Routes/Homepage";

import ExecPage from "./assets/Routes/ExecPage";
import Events from "./assets/Routes/Events";

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
          <Route
            path={"/Events"}
            element={
              <>
                <Events></Events>
              </>
            }
          ></Route>
        </Route>
      </Routes>
    </>
  );
}
