import { useNavigate, useLocation } from "react-router-dom";
import { AiOutlineTag } from "react-icons/ai";
import { MdOutlineExplore } from "react-icons/md";
import { BsFillPersonFill } from "react-icons/bs";

function Navbar() {
  const navigate = useNavigate();
  const location = useLocation();

  const pathMatchRoute = (route) => {
    if (route === location.pathname) {
      return true;
    }
  };
  return (
    <footer className="navbar">
      <nav className="navbarNav">
        <ul className="navbarListItems">
          <li className="navbarListItem">
            <MdOutlineExplore
              size={25}
              fill={pathMatchRoute("/cyber-estate") ? "#2c2c2c" : "#8f8f8f"}
              onClick={() => navigate("/cyber-estate")}
            />
            <p
              className={
                pathMatchRoute("/cyber-estate")
                  ? "navbarListItemNameActive"
                  : "navbarListItemName"
              }
            >
              Explore
            </p>
          </li>
          <li
            className="navbarListItem"
            onClick={() => navigate("/cyber-estate/offers")}
          >
            <AiOutlineTag
              size={25}
              fill={
                pathMatchRoute("/cyber-estate/offers") ? "#2c2c2c" : "#8f8f8f"
              }
              width="36px"
              height="36px"
            />
            <p  className={
                pathMatchRoute("/cyber-estate/offers")
                  ? "navbarListItemNameActive"
                  : "navbarListItemName"
              }>Offer</p>
          </li>
          <li
            className="navbarListItem"
            onClick={() => navigate("/cyber-estate/profile")}
          >
            <BsFillPersonFill
              size={25}
              fill={
                pathMatchRoute("/cyber-estate/profile") ? "#2c2c2c" : "#8f8f8f"
              }
              width="36px"
              height="36px"
            />
            <p  className={
                pathMatchRoute("/cyber-estate/profile")
                  ? "navbarListItemNameActive"
                  : "navbarListItemName"
              }>Profile</p>
          </li>
        </ul>
      </nav>
    </footer>
  );
}
export default Navbar;
