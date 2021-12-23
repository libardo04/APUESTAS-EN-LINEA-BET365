import React from "react";
import { Outlet, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";

import { useAuth } from "../../hooks/auth.hook";
import Nav from "../../components/nav";

const AppLayout = () => {
  const { register, handleSubmit } = useForm();
  const auth = useAuth();
  let navigate = useNavigate();

  const onSubmit = (data) => {
    auth.signin(data, () => {
      window.location.reload();
    });
  };

  return (
    <>
      <Nav />
      <Outlet />
      <div
        className="modal fade"
        id="feedbackModal"
        tabindex="-1"
        aria-labelledby="feedbackModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-header bg-gradient-primary-to-secondary p-4">
              <h5
                className="modal-title font-alt text-white"
                id="feedbackModalLabel"
              >
                Login
              </h5>
              <button
                className="btn-close btn-close-white"
                type="button"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body border-0 p-4">
              <form onSubmit={handleSubmit(onSubmit)}>
                <div className="form-floating mb-3">
                  <input
                    {...register("email")}
                    className="form-control"
                    id="email"
                    type="email"
                    placeholder="name@example.com"
                    data-sb-validations="required,email"
                  />
                  <label for="email">Email address</label>
                </div>

                <div className="form-floating mb-3">
                  <input
                    {...register("password")}
                    className="form-control"
                    id="phone"
                    type="password"
                    placeholder="(123) 456-7890"
                    data-sb-validations="required"
                  />
                  <label for="phone">Password</label>
                </div>

                <div className="d-grid">
                  <button
                    className="btn btn-primary rounded-pill btn-lg"
                    id="submitButton"
                    type="submit"
                  >
                    LogIn
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      <footer className="bg-black text-center py-5">
        <div className="container px-5">
          <div className="text-white-50 small">
            <div className="mb-2">
              &copy; Your Website 2021. All Rights Reserved.
            </div>
            <a href="#!">Privacy</a>
            <span className="mx-1">&middot;</span>
            <a href="#!">Terms</a>
            <span className="mx-1">&middot;</span>
            <a href="#!">FAQ</a>
          </div>
        </div>
      </footer>
    </>
  );
};

export default AppLayout;
