import React, { Component } from "react";
import Navbar from "./Navbar.js";
import Footer from "./Footer.js";
import { Link } from "react-router-dom";
export default class Home extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <div className="d-flex flex-column justify-content-center pt-20">
          <h6 className="display-4">Generate API</h6>
          <span className="text-muted">
            Don't wait for your backend to be completed!
          </span>
          <div className="d-flex justify-content-around pt-20">
            <div className="card w-25 borderless">
              <div className="card-body">
                <h5 className="card-title mb-2 text-muted">Fast and Easy</h5>
                <p className="card-text">
                  Generate your own custom API responses fast and easy. No need
                  to wait for your backend to be completed to start working on
                  your application. Create your custom response body and header.
                </p>
              </div>
            </div>
            <div className="card w-25 p-2 borderless">
              <img
                className="card-img-top"
                src={require("./icon/postman-screen.png")}
                alt="Postman example"
              />
              <div className="card-body">
                <p className="card-text">
                  Only you can delete your API responses using delete token. You
                  can enter your own delete token or we will generate one for
                  you.
                </p>
              </div>
            </div>
            <div className="card w-25 borderless">
              <div className="card-body">
                <h5 className="card-title mb-2 text-muted">Manage mocks</h5>
                <p className="card-text mb-5">
                  We store your mocks on your computer. They will be lost when
                  browser's local storage is cleared. View your mocks{" "}
                  <a href="#">here</a>. Don't wait, create your first mock!
                </p>
                <Link
                  to="/create"
                  className="btn btn-outline-secondary btn-lg purple-text ml-4 mt-2"
                >
                  CREATE MOCK
                </Link>
              </div>
            </div>
          </div>
          <div className="d-flex justify-content-center flex-row pt-5" id="row-resp">
            <div>
              <h4 className="display-4 mr-5 mt-4">Try it</h4>
            </div>
            <div className="codeContainer" id="code-resp">
              <div className="code pt-4 display-block">
              <p className="ml-4"><span className="orange">fetch</span>(<span className="green">'{process.env.REACT_APP_API + "example"}'</span>)
                  <p className="ml-3" style={{marginBottom: 0}}> .<span className="orange">then</span>(response <span className="blue">=></span> response.<span className="orange">json</span>()) </p>
                  <p className="ml-4" >.<span className="orange">then</span>(json <span className="blue">=></span> console.<span className="orange">log</span>(json)) </p>
                </p>

              </div>
            </div>
          </div>
            <Footer />
        </div>
      </div>
    );
  }
}
