import React, { Component } from "react";
import {Link} from "react-router-dom";
export default class Navbar extends Component {
  render() {
    return (
      <div className="navbar navbar-light bg-dark justify-content-between" style={{borderBottom: "1px solid" }}>
        <Link className="navbar-brand" to="/">
          <img src={require("./icon/json.png")} width="30" height="30" alt="" />
        </Link>
        <div className="inline">
          <Link to="/create" className="btn btn-outline-secondary purple-text">
            NEW MOCK
          </Link>
          <Link
            to="/created"
            className="btn btn-primary purple"
            role="button"
            aria-pressed="true"
          >
            MY MOCKS
          </Link>
        </div>
      </div>
    );
  }
}
