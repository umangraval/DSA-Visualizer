import React from "react";
import PropTypes from "prop-types";
import Footer from "./Footer";
import Navbar from "./Navbar";

function Layout({ children }) {
  return (
    <div className="flex flex-col font-sans w-full min-h-screen m-0">
      <Navbar />
      <div className="flex flex-1">{children}</div>
      <Footer />
    </div>
  );
}

Layout.propTypes = { children: PropTypes.node };

export default Layout;
