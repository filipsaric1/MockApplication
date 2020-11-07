import React, { Component } from 'react'
import {Link} from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
export default class Footer extends Component {
    render() {
        return (
            <div className="footer navbar pt-2 justify-content-between" id="foot">
                <small className="copy">&copy; Filip Šarić, 2020</small>
                <a href="https://github.com/filipsaric1/"><FontAwesomeIcon icon={faGithub} style={{color:"white", fontSize:"25px  "}}/> </a>
                <Link to="/about" className="btn btn-outline-secondary white-text">
            ABOUT
          </Link>
            </div>
        )
    }
}
