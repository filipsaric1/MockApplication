import React, { Component } from "react";
import Navbar from "./Navbar.js";
import Footer from "./Footer.js";
import EditForm from "./EditForm.js";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faJsSquare } from "@fortawesome/free-brands-svg-icons";
import { Link } from "react-router-dom";
import { Modal, Button} from "react-bootstrap"
export default class MockCreated extends Component {
  state = {
    mocksExist: localStorage.getItem("mocks") === null ? false : true,
    url:
      localStorage.getItem("lastMock") != null
        ? process.env.REACT_APP_API +
          JSON.parse(localStorage.getItem("lastMock"))._id
        : null,
    deleteUrl:
      localStorage.getItem("lastMock") != null
        ? process.env.REACT_APP_API +
          JSON.parse(localStorage.getItem("lastMock"))._id +
          "/delete/" +
          JSON.parse(localStorage.getItem("lastMock")).DeleteToken
        : null,
    mocks: localStorage.getItem("mocks") != null ? JSON.parse(localStorage.getItem("mocks")) : null,
    isModalOpen: false,
    modalOpenWith: null
  };
  openModal = (mock) => {
    this.setState({isModalOpen: true, modalOpenWith: mock})
  }
  closeModal = () => {
    this.setState({isModalOpen: false, modalOpenWithId: '', mocks: localStorage.getItem("mocks") != null ? JSON.parse(localStorage.getItem("mocks")) : null })
  }
  renderModal = () => {
    return(
      <Modal show={this.state.isModalOpen} onHide={this.closeModal} size="lg"  >
        <Modal.Header closeButton >
          <Modal.Title>Edit mock</Modal.Title>
        </Modal.Header>

        <Modal.Body style={{maxHeight: "calc(100vh - 210px)", overflowY: "scroll"}}>
          <EditForm mock={this.state.modalOpenWith} />
        </Modal.Body>

        <Modal.Footer>
          <Button variant="secondary" onClick={this.closeModal}>Close</Button>
          </Modal.Footer>
    </Modal>
    )

  }
  
  renderMock = (mock) => {
    return (<tr>
      <th scope="row">{mock.Name}</th>
      <td><small>{process.env.REACT_APP_API + mock._id}</small> <FontAwesomeIcon icon="copy" style={{cursor:"pointer"}} onClick={ (e) => {navigator.clipboard.writeText(process.env.REACT_APP_API + mock._id)}} /></td>
      <td><small>{process.env.REACT_APP_API + mock._id + "/delete/" + mock.DeleteToken} </small><FontAwesomeIcon icon="copy" style={{cursor:"pointer"}} onClick={ (e) => {navigator.clipboard.writeText(process.env.REACT_APP_API + mock._id + "/delete/" + mock.DeleteToken)}} /></td>
      <td><FontAwesomeIcon icon="edit" onClick={e => this.openModal(mock)}style={{marginRight: 5, fontSize: 25, cursor:"pointer"}}/> <a href={process.env.REACT_APP_API + mock._id} style={{color: "black"}}><FontAwesomeIcon icon="eye" style={{marginRight: 5, fontSize:25}}/></a></td>
    </tr>)
  }
  render() {
    return this.state.mocksExist ? (
      <div>
        {this.renderModal()}
        <Navbar />
        
        <div className="d-flex flex-column justify-content-center pt-20">
          <h4 className="display-4">Last mock created</h4>
          <div
            className="card borderless mt-1 pl-5 pr-5 pt-4"
            style={{ width: "89%", margin: "auto" }}
          >
            <strong>Link </strong>
            <div className="alert alert-primary" style={{backgroundColor: "white", border: "1px solid rgb(206,212,218)"}}>
              <a href={this.state.url} className="copy" style={{color:"black"}}>
                {this.state.url}
              </a>
              <FontAwesomeIcon
                icon={"copy"}
                color="black"
                className="ml-4"
                style={{ cursor: "pointer" }}
                onClick={() => {
                  navigator.clipboard.writeText(this.state.url);
                }}
              />
            </div>
            <hr />
            <span className="text-muted">Delete link </span>
            <div
              className="alert alert-primary small"
              style={{
                backgroundColor: "#343a41",
                width: "80%",
                margin: "auto",
                border: "1px solid rgb(206,212,218)",
                backgroundColor: "white",
              }}
            >
              <a href={this.state.deleteUrl} className="copy" style={{fontSize: 11, color:"black"}}>
                {this.state.deleteUrl}
              </a>
              <FontAwesomeIcon
                icon={"copy"}
                color="black"
                className="ml-4"
                style={{ cursor: "pointer" }}
                onClick={() => {
                  navigator.clipboard.writeText(this.state.deleteUrl);
                }}
              />
            </div>
            <div className="d-flex pt-5 justify-content-around">
              <div className="card w-20 text-left borderless">
                <div className="d-flex justify-content-center exception pt-15">
                  <FontAwesomeIcon
                    className="fs-20 purple-text"
                    icon={faJsSquare}
                  />
                  <span className="pt-2">Get data with JS</span>
                </div>
                <div className="card-body">
                  <p className="card-text text-muted">
                    Use Axios or fetch to get data from this mock!
                  </p>
                </div>
              </div>
              <div className="card w-20 text-left borderless pt-15">
                <div className="d-flex justify-content-center exception">
                  <img
                    className="fs-20 purple-text"
                    style={{ width: "55px" }}
                    src={require("./icon/postman-logo.png")}
                  />
                  <span className="pt-2">Postman</span>
                </div>
                <div className="card-body">
                  <p className="card-text text-muted">
                    Use Postman and get data using GET request!
                  </p>
                </div>
              </div>
              <div className="card w-20 text-left borderless pt-15">
                <div className="d-flex justify-content-center exception">
                  <FontAwesomeIcon className="fs-20 purple-text" icon="trash" />
                  <span className="pt-2">Delete token</span>
                </div>
                <div className="card-body">
                  <p className="card-text text-muted">
                    Use delete link provided above to delete the mock.{" "}
                  </p>
                </div>
              </div>
              <div className="card w-20 text-left borderless pt-15">
                <div className="d-flex justify-content-center exception">
                  <FontAwesomeIcon className="fs-20 purple-text" icon="list" />
                  <span className="pt-2">Manage your mocks</span>
                </div>
                <div className="card-body">
                  <p className="card-text text-muted">
                    <a href="#" style={{ color: "#bb9eca" }}>
                      Here
                    </a>{" "}
                    is a list of mocks created by you. They will disappear if
                    you clear your browser's local storage.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <h3 className="display-4">My mocks</h3>
          <div className="tableWrapper">
            <table className="table" style={{width: "85%", margin: "auto", marginTop: "35px", marginBottom: "100px"}}>
              <thead className="thead-dark">
                <tr>
                  <th scope="col">Name</th>
                  <th scope="col">URL</th>
                  <th scope="col">Delete URL</th>
                  <th scope="col">Actions</th>
                  
                </tr>
              </thead>
              {Array.isArray(this.state.mocks) ? this.state.mocks.map(this.renderMock): this.renderMock(this.state.mocks)}
            </table>
          </div>
          <div style={{position:"relative", bottom:-38}}>
            <Footer/>
          </div>
            
          
        </div>
        
      </div>
    ) : (
      <div>
        <Navbar />
        <h3 className="display-3">
          You haven't created any mocks. Create one{" "}
          <Link to="/create">here</Link>
        </h3>
        <Footer/>
      </div>
    );
  }
}
