import React from "react";
import Navbar from "../components/navbar";

const Layout = ({ children }) => (
  <body
   
  >
    <Navbar />
    <div className="min-h-screen flex flex-col">
      <main className="flex-grow">{children}</main>
      <div className="mt-6">
      </div>
    </div>
  </body>
);

export default Layout;
