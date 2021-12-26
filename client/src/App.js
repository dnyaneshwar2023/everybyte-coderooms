import React, { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import { Switch, Route } from "react-router-dom";
import Home from "./pages/Home";
import Create from "./pages/Create";
import Editor from "./pages/Editor";
import Join from "./pages/Join";
import Error from "./pages/Error";
import Calendar from "./pages/Calendar";
import Login from "./pages/Login";
import AuthContext from "./auth/context";
import getUser from "./auth/getUser";
import DrawerConext from "./hooks/Drawer/context";
import Sidebar from "./components/Sidebar";

function App() {
  const [user, setUser] = useState();
  const [drawer, setDrawer] = useState(false);
  const [loaded, setLoaded] = useState(false);
  const store = { user, setUser };
  const drawerStore = { drawer, setDrawer };

  const restoreUser = () => {
    setUser(getUser());
  };

  useEffect(() => {
    restoreUser();
    setLoaded(true);
  }, []);

  return (
    <>
      <AuthContext.Provider value={store}>
        <DrawerConext.Provider value={drawerStore}>
          <Navbar />
        </DrawerConext.Provider>
      </AuthContext.Provider>

      <Switch>
        <Route exact path="/" component={Home} />
        <Route
          exact
          path="/create"
          render={() => (
            <AuthContext.Provider value={store}>
              {user ? <Create /> : <></>}
            </AuthContext.Provider>
          )}
        />
        <Route
          exact
          path="/edit/:roomid"
          render={() => (
            <AuthContext.Provider value={store}>
              <Editor />
            </AuthContext.Provider>
          )}
        />
        <Route exact path="/join" component={Join} />
        <Route exact path="/calendar" component={Calendar} />
        <Route
          exact
          path="/login"
          render={() => (
            <AuthContext.Provider value={store}>
              {loaded ? <Login /> : <></>}
            </AuthContext.Provider>
          )}
        />

        <Route component={Error} />
      </Switch>
      <AuthContext.Provider value={store}>
        <DrawerConext.Provider value={drawerStore}>
          <Sidebar />
        </DrawerConext.Provider>
      </AuthContext.Provider>
    </>
  );
}

export default App;
