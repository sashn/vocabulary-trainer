import { NavLink } from "react-router-dom";

const Header = ({ listUrl, practiceUrl }) => {
  return (
    <header className="p-3 bg-dark text-white">
      <div className="container">
        <div className="d-flex justify-content-between">

          <div className="home-button">
            <NavLink className="d-flex fs-1" to={ listUrl }>
              <i className="bi-chat-quote me-3"></i>
              <div className="d-none d-lg-block">vocabulary trainer</div>
            </NavLink>
          </div>

          <ul className="nav fs-3">
            <li>
              <NavLink 
                to={ listUrl } 
                className="nav-link px-2" 
                activeClassName="text-secondary"
                style={{ color: "white" }}
              >
                list
              </NavLink>
            </li>
            <li>
              <NavLink 
                to={ practiceUrl } 
                className="nav-link px-2" 
                activeClassName="text-secondary"
                style={{ color: "white" }}
              >
                practice
              </NavLink>
            </li>
          </ul>

        </div>
      </div>
    </header>
  )
}

export default Header
