import React, { Component } from "react";
import Footer from "./Footer.js";
import Navbar from "./Navbar.js";
import axios from "axios"
import raw from "raw.macro"
export default class AddForm extends Component {
    state = {
        Name: "",
        HttpStatus: 200,
        Headers: "",
        Body:"",
        DeleteToken: '',
        alertBodyDisplay: "None",
        alertHeadersDisplay: "None",
        codes: raw("./httpcodes.txt").split("\n"),
        alertSuccessDisplay: "None"
    }
    renderCode = (code) => {
      var strArr = code.split(" ")
      return (<option value={strArr[0]}>{code}</option>)
    }
    componentDidMount(){
        this.setState({
            _id:this.props.mock._id,
            Name: this.props.mock.Name,
            Headers: this.props.mock.Headers,
            HttpStatus: this.props.mock.HttpStatus,
            Body: this.props.mock.Body,
            DeleteToken: this.props.mock.DeleteToken
        })
    }
    onSubmit = async (e) => {
        e.preventDefault()
        try {
          if (this.state.Headers !== '') {
            let headerJSON = JSON.parse(this.state.Headers)
          }
        }
        catch (err) {
            this.setState({alertSuccessDisplay:"None"})
          return
        }
        try {
          if (this.state.Body !== '') {
            let bodyJSON = JSON.parse(this.state.Body)
          }
        }
        catch(err) {
            this.setState({alertSuccessDisplay:"None"})
          return
        }
        var mock = {
            _id: this.state._id,
          Name: this.state.Name,
          HttpStatus: this.state.HttpStatus,
          Headers: this.state.Headers.replace("\\", ''),
          Body:this.state.Body.replace('\\', ''),
          DeleteToken: this.state.DeleteToken,
        }
        console.log(mock)
        axios.put(`http://localhost:4000/api/mocks/` + this.state._id.toString(), mock).then((response) => {
        console.log(response);
        var mocks = JSON.parse(localStorage.getItem("mocks"))
        if (!Array.isArray(mocks)) {
            mocks = mock
        } 
        else {
            for (var i = 0; i < mocks.length; i++) {
                if (mocks[i]._id === mock._id) {
                    mocks[i] = mock
                }
        }
    }
        localStorage.setItem("mocks", JSON.stringify(mocks))
        this.setState({alertSuccessDisplay:"block"})
      });
    }
  render() {
    return (
      <div>
        <div className="d-flex flex-column justify-content-center pt-20" >
          <form style={{ width: "77%", margin: "auto", textAlign: "left" }} onSubmit={this.onSubmit}>
            <div className="form-group">
              <label HTMLfor="name">Mock name (optional)</label>
              <input
                type="text"
                className="form-control"
                id="inputName"
                placeholder="Name"
                value={this.state.Name}
                onChange={async (e) =>  { await this.setState({Name: e.target.value})}}
              />
            </div>
            <div className="form-group">
              <label for="statuscode"> Response status code</label>
              <select className="form-control"
              value={this.state.HttpStatus}
              onChange={async (e) =>  {await this.setState({HttpStatus: e.target.value})}}
              required>
                {this.state.codes.map(this.renderCode)}
                
              </select>
            </div>
            <div className="form-group">
              <label for="header"> Response header </label>
              <textarea className="form-control"
                placeholder="Must be JSON!"
                value={this.state.Headers}
                onChange={async (e) => {
                  await this.setState({Headers: e.target.value})
                  try {
                    var json = JSON.parse(this.state.Headers)
                    await this.setState({alertHeadersDisplay: "None"})
                  }
                  catch(err) {
                    if (this.state.Headers)
                      await this.setState({alertHeadersDisplay: "inline"})
                    else
                      await this.setState({alertHeadersDisplay: "None"})
                  }

                
                }} 
                />
              <small className="danger" style={{display: this.state.alertHeadersDisplay, color:"red"}}> Response header not in JSON format!</small>
            </div>

            <div className="form-group">
              <label for="header"> Response body </label>
              <textarea
                className="form-control"
                placeholder="JSON"
                value={this.state.Body}
                onChange={async (e) => { 
                  await this.setState({Body: e.target.value})
                  try {
                    var json = JSON.parse(this.state.Body)
                    await this.setState({alertBodyDisplay: "None"})
                  }
                  catch(err) {
                    if (this.state.Body)
                      await this.setState({alertBodyDisplay: "inline"})
                    else
                      await this.setState({alertBodyDisplay: "None"})
                  }
                }}
                
              />
              <small className="danger" style={{display: this.state.alertBodyDisplay, color:"red"}}> Response body not in JSON format!</small>
            </div>

            <div className="form-group">
              <label for="deleteToken">Delete token (optional)</label>
              <input
                type="text"
                placeholder="Delete token"
                className="form-control"
                value={this.state.DeleteToken}
                onChange={async (e) =>  {await this.setState({DeleteToken: e.target.value})}}

              />
              <small className="text-muted">
                Optional, will be auto generated if not provided. Mocks can only
                be deleted by entering valid delete token.
              </small>
            </div>

            <input type="submit" className="btn btn-primary purple mb-4" value="SUBMIT"/>
            <div className="alert alert-success" style={{display: this.state.alertSuccessDisplay}}>
                Mock successfully updated! Close modal to see the changes.
            </div>
            
          </form>
        </div>
      </div>
    );
  }
}

