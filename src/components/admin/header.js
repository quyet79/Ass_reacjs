import { Link, NavLink, Redirect, useHistory } from "react-router-dom";
import { signOut, isAuthenticate } from "auth";
import { useLocation } from "react-router-dom";
import React, { useEffect, useState } from "react";

const Header = () => {
  const history = useHistory(); // sau khi logout thì quay về trang nào đó
  const { pathname } = useLocation(); // pathname: Để lấy cái đường dẫn sau domain ví dụ: dantri.com/[pathname]
  const [isLogged, setIsLogged] = useState(false); // set state để sau này check trạng thái đã đăng nhập hay chưa
  const { username, email, sub } = isAuthenticate(); // lấy thông tin từ localStorage: email, id để hiển thị ra ngoài và check quyền
  useEffect(() => {
    // render sau khi return chạy
    isAuthenticate() && setIsLogged(true); // nếu mà thằng user đăng nhập (có thông tin localStorage) thì set state là true
  }, [pathname, isLogged]); // thằng useEffect được gọi là khi thằng pathname hoặc thằng state thay đổi
  const checkLogin = () => {
    if (pathname !== "/signin" && isLogged) {
      // nếu pathname thay đổi (!= signin) và đã đăng nhập
      return (
        <>
        <Link><a style={{color: "white"}}href="#">
          {email}
        </a></Link>
          <Link
            className="btn btn-outline-success ms-1"
            style={{ cursor: "pointer" }}
            onClick={() =>
              signOut(() => {
                setIsLogged(false);
                history.push("/");
              })
            }
          >
            Sign Out
          </Link>
        </>
      );
    } else if (pathname === "/signin" && isLogged) {
      // neu đã login và truy cập vào đường dẫn /signin
      return <Redirect to="/" />;
    } else {
      // ngược lại khi signout
      return (
        <>
          <Link className="btn btn-outline-success ms-1" to="/signin">
            Signin
          </Link>
          <Link className="btn btn-outline-success ms-1" to="/signup">
            Signup
          </Link>
        </>
      );
    }
  };
  return (
    <header className="header">
      {/* Fixed navbar */}
      <nav className="position-fixed navbar navbar-expand-md sticky-top navbar-dark fixed-top bg-dark">
        <div className="container-fluid">
          <a className="navbar-brand" href="/">
            <img
              src="https://findicons.com/files/icons/650/chanel/256/chanel_logo.png"
              width="100px"
              height="80px"
              alt=""
            />
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarCollapse"
            aria-controls="navbarCollapse"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarCollapse">
            <ul className="navbar-nav me-auto mb-2 mb-md-0">
              <li className="nav-item">
                <NavLink
                  exact
                  className="nav-link"
                  activeClassName="active"
                  to="/admin"
                >
                  <span data-feather="home" />
                  <h4>View Home</h4>
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  exact
                  className="nav-link"
                  activeClassName="active"
                  to="/admin/product"
                >
                  <span data-feather="shopping-cart" />
                  <h4>Product</h4>
                </NavLink>
              </li>

              <li className="nav-item">
                <NavLink
                  exact
                  className="nav-link"
                  activeClassName="active"
                  to="/admin/About"
                >
                  <span data-feather="shopping-cart" />
                  <h4>About</h4>
                </NavLink>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link disabled"
                  href="#"
                  tabIndex={-1}
                  aria-disabled="true"
                ></a>
              </li>
            </ul>
            <form className="d-flex">
              {/* <input
                className="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <button className="btn btn-outline-success" type="submit">
                Search
              </button> */}
              {checkLogin()};
            </form>
          </div>
        </div>
      </nav>
    </header>
  );
};
export default Header;
