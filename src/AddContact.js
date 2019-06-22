import React, { Component } from 'react'
import {connect} from 'react-redux'
import {addcontact} from '../action/Action'
class AddContact extends Component {
    constructor(props) {
        super(props);
        this.state = {
          name: "",
          phone: "",
          mail: ""
        };
      }
      handelchange = e => {
        this.setState({
          [e.target.name]: e.target.value
        });
      };
    render() {
        return (
            <div className="drop">
            <div>
              
              <label> Name: </label>
              <input
                name="name"
                type="text"
                onChange={e => this.handelchange(e)}
                value={this.state.name}
              />
            </div>
            <div>
              
              <label> Phone: </label>
              <input
                name="phone"
                type="text"
                onChange={e => this.handelchange(e)}
                value={this.state.phone}
              />
            </div>
            <div>
              
              <label> E-mail: </label>
              <input
                name="mail"
                type="text"
                onChange={e => this.handelchange(e)}
                value={this.state.mail}
              />
            </div>
            <button
              className="btnadd"
              onClick={() => {
                  this.props.addcontact(this.state)
              }}
            >
              
              Save
            </button>
          </div>
        )
    }
}
const mapDispatchToProps =dispatch=>({
  addcontact: payload => dispatch(addcontact(payload))
          })
export default connect(
null,
mapDispatchToProps
)(AddContact)