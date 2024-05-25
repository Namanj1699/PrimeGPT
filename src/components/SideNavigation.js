import React from "react";
import { Sidebar, Menu, MenuItem } from 'react-pro-sidebar';
import { Link } from "react-router-dom";

const SideNavigation = () => {
  return (
    <div className="mt-40 ml-4">
      <Sidebar className="">
  <Menu>
    <Link to="/support"><MenuItem > Queries & Feedback </MenuItem></Link>
    <Link to ="/about"><MenuItem> About me </MenuItem></Link>
    
  </Menu>
</Sidebar>;        
    </div>
  );
};

export default SideNavigation ;
