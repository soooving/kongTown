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
          <Route path="/manage/product" element={<ProductManage />} />
          <Route exact element={"4"} />
        </Routes>
      </>
  );
}

export default App;