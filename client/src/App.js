import React, { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import { Routes, Route, Outlet, Navigate } from "react-router-dom";
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
import Dashboard from "./pages/Dashboard";
import ToastTester from "./pages/ToastTester";
import EditPage from "./pages/EditPage";
import Board from "./components/Board";

function App() {
  const [user, setUser] = useState(getUser());
  const [drawer, setDrawer] = useState(false);
  const [loaded, setLoaded] = useState(false);
  const store = { user, setUser };
  const drawerStore = { drawer, setDrawer };

  return (
    <>
      <AuthContext.Provider value={store}>
        <DrawerConext.Provider value={drawerStore}>
          <Navbar />
        </DrawerConext.Provider>
      </AuthContext.Provider>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/board" element={<Board />} />

        <Route
          path="/create"
          element={
            <AuthContext.Provider value={store}>
              {user != null ? <Create /> : <Navigate to="/login" />}
            </AuthContext.Provider>
          }
        />
        <Route
          path="/dashboard"
          element={
            <AuthContext.Provider value={store}>
              {user ? <Dashboard /> : <Navigate to="/login" />}
            </AuthContext.Provider>
          }
        />
        <Route
          path="/edit"
          element={
            <AuthContext.Provider value={store}>
              {user != null ? <EditPage /> : <Navigate to="/login" />}
            </AuthContext.Provider>
          }
        >
          <Route path=":roomid" element={<Outlet />} />
        </Route>
        <Route
          path="/join"
          element={
            <AuthContext.Provider value={store}>
              {user ? <Join /> : <Navigate to="/login" />}
            </AuthContext.Provider>
          }
        />
        <Route path="/calendar" element={<Calendar />} />
        <Route
          path="/login"
          element={
            <AuthContext.Provider value={store}>
              <Login />
            </AuthContext.Provider>
          }
        />

        <Route path="*" element={<Error />} />
      </Routes>
      <AuthContext.Provider value={store}>
        <DrawerConext.Provider value={drawerStore}>
          <Sidebar />
        </DrawerConext.Provider>
      </AuthContext.Provider>
    </>
  );
}

export default App;
