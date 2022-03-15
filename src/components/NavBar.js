import {FaBars} from "react-icons/fa";
import {AiOutlineClose} from "react-icons/ai";
import { Link } from "react-router-dom";
import { useState } from "react";
import { SideBarData } from "./SideBarData";
import "./NavBar.css";

function Navbar() {
  const [sidebar, setSidebar] = useState(false);
  const showSidebar = () => setSidebar(!sidebar);

  return (
    <>
      <div className="navbar">
        <Link to="#" className="menu-bars">
          <FaBars onClick={showSidebar} />
        </Link>
      </div>
      <nav className={sidebar ? "nav-menu active" : "nav-menu"}>
        <ul className="nav-menu-items" onClick={showSidebar}>
          <li className="navbar-toggle">
            <Link to="#" className="menu-bars">
              <AiOutlineClose />
            </Link>
          </li>
          {SideBarData.map((data, index) => {
            return (
              <li key={index}>
                <Link to={data.path} className={data.cName}>
                  <span>{data.icon}</span>
                  {data.title}
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
    </>
  );
}

export default Navbar;
