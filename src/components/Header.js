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
            <li><a href="#" className="nav-link px-2 text-secondary">list</a></li>
            <li><a href="#" className="nav-link px-2 text-white">train</a></li>
          </ul>

        </div>
      </div>
    </header>
  )
}

export default Header
