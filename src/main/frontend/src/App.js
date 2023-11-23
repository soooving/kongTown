// src/main/frontend/src/App.js
import { Route, Routes } from "react-router-dom";
import React from 'react';

import Header from "./com/layout/header";
import Sidebar from "./com/layout/sidebar";

import Main from "./main/main";
import Product from "./manage/product";

function App() {

  return (
      <>
        <Header />

          <div className={"content"}>
              <Sidebar />
              <Routes>
                  <Route path="/" exact element={<Main />} />
                  <Route path="/user/login" element={<Product />} />

                  <Route path="/manage/firm" element={<Product />} />
                  <Route path="/manage/firm/admin" element={<Product />} />

                  <Route path="/manage/firm/user" element={<Product />} />
                  <Route path="/manage/product" element={<Product />} />
                  <Route path="/product/signup" element={<Product />} />

                  <Route path="/product/rental" element={<Product />} />
                  <Route path="/product/return" element={<Product />} />

                  <Route exact element={<Main />} />
              </Routes>
          </div>
      </>
  );
}

export default App;