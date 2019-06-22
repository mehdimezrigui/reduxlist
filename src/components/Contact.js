import React, { Component } from 'react'
import {connect} from 'react-redux'
import {deletecontact} from '../action/Action'
class Contact extends Component {
    render() {
        return (
            <div className='box-contact'>
                <h5>Name: {this.props.info.name}</h5>
                <h5>phone: {this.props.info.phone}</h5>
                <h5>E-mail: {this.props.info.mail}</h5>
                <button onClick={()=>this.props.deletecontact(this.props.info._id)}>DELETE</button><button>UPDATE</button>
            </div>
        )
    }
}
const mapDispatchToProps =dispatch=>({
    deletecontact: payload => dispatch(deletecontact(payload))
            })
  export default connect(
  null,
  mapDispatchToProps
  )(Contact)