import { useContext, useState } from "react";
import { Link, Navigate, Outlet, useNavigate } from "react-router-dom";
import NavbarComponent from "./NavbarComponent";
import { DataContext } from "./TheContext";
import Footer from "./FooterComponent";

function PrivateRoute({ element }) {
  //   const location = useLocation();
  const { fakeAuthService, setFakeAuthService } = useContext(DataContext);

  //   fake uth service testing
  const [auth, setAuth] = useState(null);
  const navigate = useNavigate();
  //   const [fakeAuthService, setFakeAuthService] = useState({
  //     isAuthenticated: true,
  //     login(callback) {
  //       this.isAuthenticated = true;
  //       setTimeout(callback, 100);
  //     },
  //     logout(callback) {
  //       this.isAuthenticated = false;
  //       setTimeout(callback, 100);
  //     },
  //   });

  //   const fakeAuthService = {
  //     isAuthenticated: true,
  //     login(callback) {
  //       this.isAuthenticated = true;
  //       setTimeout(callback, 100);
  //     },
  //     logout(callback) {
  //       this.isAuthenticated = false;
  //       setTimeout(callback, 100);
  //     },
  //   };

  // const fakeAuthService = {
  //   isAuthenticated: false,
  //   login(callback) {
  //     this.isAuthenticated = true;
  //     setTimeout(callback, 100);
  //   },
  //   logout(callback) {
  //     this.isAuthenticated = false;
  //     setTimeout(callback, 100);
  //   },
  // };

  if (!fakeAuthService.isAuthenticated) {
    return <Navigate to="/" replace />;
  }

 

  return (
    <div className="position-relative" style={{ height: "max-content" }}>
      {/* <h1>Private Route Header</h1> */}
      {/* <nav>
        <ul>
          <li>
            <Link to="/dashboard">Dashboard</Link>
          </li>
          <li>
            <Link to="/profile">Profile</Link>
          </li>
          <li>
            <Link to="/settings">Settings</Link>
          </li>
        </ul>
      </nav> */}
      <NavbarComponent />
      <Outlet />
      {/* <h2>Private Route Footer</h2>
      <button onClick={handleLogout}>Logout</button> */}
      <Footer />
    </div>
  );
}

export default PrivateRoute;
