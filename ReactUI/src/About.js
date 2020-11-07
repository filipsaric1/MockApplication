import React, { Component } from "react";
import Navbar from "./Navbar.js";
import Footer from "./Footer.js";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoneyBill } from "@fortawesome/fontawesome-free-solid";
import { Link } from "react-router-dom";
export default class About extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <div className="d-flex flex-column justify-content-center pt-20">
          <h5 className="display-4">Info</h5>
          <div className="d-flex pt-5 justify-content-around">
            <div className="card w-20 text-left borderless">
              <div className="d-flex justify-content-center exception pt-15">
                <FontAwesomeIcon
                  className="fs-20 purple-text"
                  icon={faMoneyBill}
                />
                <span className="pt-2">It's free!</span>
              </div>
              <div className="card-body">
                <p className="card-text text-muted">
                  That's right! All users can create, update and delete mocks
                  for free! No charge at all.
                </p>
              </div>
            </div>
            <div className="card w-20 text-left borderless pt-15">
              <div className="d-flex justify-content-center exception">
                <FontAwesomeIcon className="fs-20 purple-text" icon="edit" />
                <span className="pt-2">Developer friendly!</span>
              </div>
              <div className="card-body">
                <p className="card-text text-muted">
                  Created mocks are editable. Developer can update or delete
                  them anytime.
                </p>
              </div>
            </div>
            <div className="card w-20 text-left borderless pt-15">
              <div className="d-flex justify-content-center exception">
                <FontAwesomeIcon
                  className="fs-20 purple-text"
                  icon="stop-circle"
                />
                <span className="pt-2">Unlimited!</span>
              </div>
              <div className="card-body">
                <p className="card-text text-muted">
                  Unlimited number of API calls.{" "}
                </p>
              </div>
            </div>
            <div className="card w-20 text-left borderless pt-15">
              <div className="d-flex justify-content-center exception">
                <FontAwesomeIcon className="fs-20 purple-text" icon="robot" />
                <span className="pt-2">Compatible</span>
              </div>
              <div className="card-body">
                <p className="card-text text-muted">
                  Compatible with mobile and web applications.{" "}
                </p>
              </div>
            </div>
          </div>
          <div>
            <Link
              to="/create"
              className="btn btn-outline-secondary mt-5 purple-text w-25"
            >
              CREATE YOUR MOCK
            </Link>
          </div>
          <div>
            <Footer />
          </div>
        </div>
      </div>
    );
  }
}
