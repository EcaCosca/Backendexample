import React from "react";
import { Link } from "react-router-dom";
function Navbar(props) {
  return (
    <nav class="bg-white px-8 pt-2 shadow-md">
      <div class="-mb-px flex justify-center">
        <Link
          to="/"
          className="no-underline text-teal-dark border-b-2 border-teal-dark uppercase tracking-wide font-bold text-xs py-3 mr-8"
        >
          Blogs
        </Link>
        <Link
          to="/hw"
          className="no-underline text-grey-dark border-b-2 border-transparent uppercase tracking-wide font-bold text-xs py-3 mr-8"
        >
          HomeWorks
        </Link>
      </div>
      <div style={{ marginTop: "2%" }} />
    </nav>
  );
}

export default Navbar;
