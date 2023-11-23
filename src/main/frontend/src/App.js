// src/main/frontend/src/App.js
import { Route, Routes} from "react-router-dom";
import React from 'react';

import Header from "./com/layout/header";
import Sidebar from "./com/layout/sidebar";
import Main from "./com/main/main";
import ProductManage from "./com/manage/productManage";

function App() {

  return (
      <>
        <Header />
        <Sidebar />

        <Routes>
            <Route path="/" exact element={<Main />} />
            <Route path="/user/login" element={<ProductManage />} />

            <Route path="/manage/firm" element={<ProductManage />} />
            <Route path="/manage/firm/admin" element={<ProductManage />} />

            <Route path="/manage/firm/user" element={<ProductManage />} />
            <Route path="/manage/product" element={<ProductManage />} />
            <Route path="/product/signup" element={<ProductManage />} />

            <Route path="/product/rental" element={<ProductManage />} />
            <Route path="/product/return" element={<ProductManage />} />

            <Route exact element={<Main />} />
        </Routes>
      </>
  );
}

export default App;