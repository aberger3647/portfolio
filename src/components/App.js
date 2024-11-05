import React, { useState } from "react";
import Header from "./Header.js";
import Content from "./Content.js";

const App = () => {
  const [currentPage, setCurrentPage] = useState("Portfolio");
  const handlePageChange = (page) => setCurrentPage(page);
  return (
    <>
      <Header currentPage={currentPage} handlePageChange={handlePageChange} />
      <Content currentPage={currentPage} />
    </>
  );
};

export default App;
