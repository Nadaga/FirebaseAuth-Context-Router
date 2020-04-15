import React, { useMemo } from "react";
import "./App.css";
import UserAuth from "./container/UserAuth";
import { Route, BrowserRouter } from "react-router-dom";
import { useState } from "react";
import GlobalState from "./container/GlobalContext";

function App() {
  const [auth, setAuth] = useState(null);

  //Memo
  const providerValue = useMemo(() => ({ auth, setAuth }), [auth, setAuth]);

  return (
    <GlobalState.Provider value={providerValue}>
      <BrowserRouter>
        <Route exact path="/" component={UserAuth} />
        {/* <Route exact path="/login" component={UserAuth} />
        <Route exact path="/signup" component={UserAuth} /> */}
      </BrowserRouter>
    </GlobalState.Provider>
  );
}

export default App;
