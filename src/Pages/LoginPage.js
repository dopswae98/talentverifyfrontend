import React, { useContext, useEffect, useState } from "react";
import NavbarComponent from "../Components/NavbarComponent";
import axios from "axios";
import { Link, Navigate } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { DataContext } from "../Components/TheContext";

const LoginPage = () => {
  const { fakeAuthService, setFakeAuthService } = useContext(DataContext);
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });
  const handleChange = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };
  const [clearFormData, setClearFormData] = useState({
    username: "",
    password: "",
  });

  const [isLoading, setIsLoading] = useState(false);
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

  // handle Login for transferring purposes
  // function handleLogin() {
  //   setIsLoading(true);
  //   fakeAuthService.login(() => {
  //     setIsLoading(false);
  //     setFakeAuthService({ ...fakeAuthService, isAuthenticated: true });
  //     console.log(fakeAuthService);
  //     navigate("/dashboard");
  //   });
  // }

  // the working code for authentication from an api *****
  const handleLogin = (event) => {
    event.preventDefault();
    console.log(formData);
    axios
      // .post("http://localhost:4000/send-email", formData)
      .post("http://127.0.0.1:8000/api/login/", formData)
      .then((response) => {
        console.log(response);
        console.log("formdata", formData);
        setFakeAuthService({ ...fakeAuthService, isAuthenticated: true });
        // setAddedFeedback(true);
        // login();
        // setAuth({ token: true });
        navigate("/dashboard");
        // <Navigate to="/upload-csv" />;

        console.log("login success");
        // setFormData(clearFormData);
      })
      .catch((error) => {
        console.log("error", error);
        // setAddedFeedback(false);
      });
    // api();
  };
  // the working code for authentication from an api *****
  // const handleSubmit = (event) => {
  //   event.preventDefault();
  //   console.log(formData);
  //   axios
  //     // .post("http://localhost:4000/send-email", formData)
  //     .post("http://127.0.0.1:8000/api/login/", formData)
  //     .then((response) => {
  //       console.log(response);
  //       console.log("formdata", formData);
  //       // setAddedFeedback(true);
  //       login();
  //       setAuth({ token: true });
  //       navigate("/upload-csv");
  //       // <Navigate to="/upload-csv" />;
  //       console.log("login success");
  //       // setFormData(clearFormData);
  //     })
  //     .catch((error) => {
  //       console.log("error", error);
  //       // setAddedFeedback(false);
  //     });
  //   // api();
  // };

  // testing authentication code
  // function handleSubmit(e) {
  //   e.PreventDefault();
  //   setIsLoading(true);
  //   fakeAuthService.login(() => {
  //     setIsLoading(false);
  //     // setFakeAuthService({ ...fakeAuthService, isAuthenticated: true });
  //     console.log(fakeAuthService);
  //     console.log("to dash");
  //     navigate("/dashboard");
  //   });
  // }

  // working handle login call back function
  // function handleLogin() {
  //   setIsLoading(true);
  //   fakeAuthService.login(() => {
  //     setIsLoading(false);
  //     setFakeAuthService({ ...fakeAuthService, isAuthenticated: true });
  //     console.log(fakeAuthService);
  //     navigate("/dashboard");
  //   });
  // }

  return (
    <div className="bg-light overflow-hidden vh-100">
      <NavbarComponent />
      <section className="form-section bg-light mx-3 mx-md-0">
        <div className="row mt-5">
          <div className="col-md-6 mx-auto bg-white mt-5 py-3 rounded">
            <form
              action=""
              // method="POST"
              // onSubmit={handleSubmit}
            >
              <div className="mb-3">
                <label htmlFor="exampleInputEmail1" className="form-label">
                  Username
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                  value={formData.username}
                  onChange={handleChange}
                  name="username"
                />
                <div id="emailHelp" className="form-text">
                  Enter your credincials to login
                </div>
              </div>
              <div className="mb-3">
                <label htmlFor="dateRegistered" className="form-label">
                  Password
                </label>
                <input
                  type="password"
                  className="form-control"
                  id="dateRegistered"
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                />
                <Link to="/forgot-password">
                  {" "}
                  <div id="emailHelp" className="form-text text-primary">
                    Enter your credincials to login
                  </div>
                </Link>
              </div>
              <button
                type="submit"
                className="btn btn-primary w-100"
                onClick={handleLogin}
                disabled={isLoading}
              >
                {isLoading ? "Logging in..." : "Submit"}
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default LoginPage;
