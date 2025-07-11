import { Link } from "react-router-dom";

const NormalHeader = () => {
  return (
    <ul className="navbar-nav ms-auto mb-2 mb-lg-0 me-5">
      <li className="nav-item">
        <Link to="/user/patient/register" className="nav-link active" aria-current="page">
          <b className="text-color">Register Patient</b>
        </Link>
      </li>

      <li className="nav-item">
        <Link to="/user/login" className="nav-link active" aria-current="page">
          <b className="text-color">Login</b>
        </Link>
      </li>
    </ul>
  );
};

export default NormalHeader;
