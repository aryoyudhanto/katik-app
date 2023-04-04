import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <header className="navbar h-10 bg-blue-500 shadow sticky top-0 z-50">
      <div className="navbar-start px-5">
        <Link to="/" className="btn btn-ghost normal-case text-lg text-white">
          Katik
        </Link>
      </div>
      <div className="navbar-center"></div>
      <div className="navbar-end mr-10"></div>
    </header>
  )
}

export default Navbar