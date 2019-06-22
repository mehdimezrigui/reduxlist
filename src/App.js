import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { connect } from "react-redux";
import { getcontact } from "./action/Action";
import "./App.css";
import AddContact from "./components/AddContact";
import Contact from "./components/Contact";



class App extends Component {
  constructor(props) {
    super(props);
  }
  componentDidMount = () => {
    this.props.getContact();
  };
  render() {
    console.log(this.props.contact);
    return (
      <Router>
        <div className="App">
          <Link to="/add-contact">
            <button> addcontact</button>
          </Link>
          <Link to="/">
            <button> Home</button>
          </Link>
          {/* {this.props.contact.map(el => <div><h3>{el.name}</h3><h3>{el.phone}</h3><h3>{el.mail}</h3></div>)} */}
        </div>
        <Route
          exact
          path="/"
          render={() => (
            <div >
              <h1>Contact List</h1>
              <div className="list">
              {this.props.contact.map(el => (
                <Contact info={el} />
              ))}
              </div>
            </div>
          )}
        />
        <Route path="/add-contact" render={() => <AddContact />} />
      </Router>
    );
  }
}
const mapStateToProps = state => ({ contact: state });
const mapDispatchToProps = dispatch => ({
  getContact: () => dispatch(getcontact())
});
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
