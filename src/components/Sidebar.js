import React from "react";
import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <aside className="sidebar">
      <Link>Home</Link>
      <Link>Explore</Link>
      <Link>Bookmarks</Link>
      <Link>Profile</Link>
    </aside>
  );
};

export default Sidebar;
