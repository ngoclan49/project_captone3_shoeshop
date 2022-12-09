import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import HomeTemplate from "./Templates/HomeTemplate/HomeTemplate";
import Home from "./Pages/Home/Home.jsx";
import Login from "./Pages/Login/Login.jsx";
import Register from "./Pages/Register/Register.jsx";
import Detail from "./Pages/Detail/Detail.jsx";
import Search from "./Pages/Search/Search.jsx";
import Carts from "./Pages/Carts/Carts.jsx";
import Profile from "./Pages/Profile/Profile.jsx";

//setup redux
import { Provider } from "react-redux";
import { store } from "./redux/configStore"; 

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <BrowserRouter>
      <Routes>
        <Route path="" element={<HomeTemplate />}>
          <Route index element={<Home />}></Route>
          <Route path="detail" element={<Detail />}></Route>
          <Route path="login" element={<Login />}></Route>
          <Route path="register" element={<Register />}></Route>
          <Route path="search" element={<Search />}></Route>
          <Route path="carts" element={<Carts />}></Route>
          <Route path="profile" element={<Profile />}></Route>
          <Route path="*" element={<Navigate to="/" />}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  </Provider>
);
