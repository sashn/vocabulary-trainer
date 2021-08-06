import { NavLink } from "react-router-dom";

const Header = props => {
  return (
    <header className="p-3 bg-dark text-white">
      <div className="container">
        <div className="d-flex justify-content-between">

          <div className="d-flex fs-1">
            <i className="bi-chat-quote me-3"></i>
            <div>vocabulary trainer</div>
          </div>

          <ul className="nav fs-3">
            <li>
              <NavLink 
                to="/list" 
                className="nav-link px-2" 
                activeClassName="text-secondary"
                style={{ color: "white" }}
              >
                list
              </NavLink>
            </li>
            <li>
              <NavLink 
                to="/practice" 
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
