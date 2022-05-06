import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App";
import UserView from "./components/UserView";
import RegisterView from "./components/RegisterView";

function Main() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route path="" element={<UserView />} />
          <Route path="users/add" element={<RegisterView />} />
          <Route
            path="*"
            element={
              <main style={{ padding: "1rem" }}>
                <p>There's nothing here!</p>
              </main>
            }
          />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default Main;
