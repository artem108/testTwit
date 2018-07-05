import React, { Component } from 'react';
import { connect } from 'react-redux';
import { login } from '../modules/users'
import InputForm from '../components/InputForm'

class LogIn extends Component {
  constructor(props) {
    super(props);
      this.state = {
        value: '',
      };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {

    this.setState({value: event.target.value});
  }

  handleSubmit() {
    const { value } = this.state
    this.props.dispatch(login(value))
    this.setState({value: ''});
  }

  render() {
    return (
      <InputForm
          handleSubmit={this.handleSubmit}
          handleChange={this.handleChange}
          value={this.state.value}
          title={''}
          btnVal={'Log in'}
        />
    );
  }
}

const mapStateToProps = state => {
    return {
      currUser: state.users.currUser
    }
 }

export default connect(mapStateToProps)(LogIn)
