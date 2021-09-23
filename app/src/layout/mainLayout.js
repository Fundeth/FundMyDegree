import React from "react";
import Navbar from "../components/navbar";
import Footer from "../components/footer";

const Layout = ({ children }) => (
  <body
  >
    <Navbar />
    <div className="min-h-screen flex flex-col" backGround>
      <main className="flex-grow">{children}</main>
      <div className="mt-6">
      </div>
    </div>
    <Footer/>
  </body>
);

export default Layout;
