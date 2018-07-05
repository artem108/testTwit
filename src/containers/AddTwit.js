import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addTwet } from '../modules/twits'
import InputForm from '../components/InputForm'

class AddTwit extends Component {
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
    const { dispatch, currUser } = this.props
    const { value } = this.state

    dispatch(addTwet(value, currUser))
    this.setState({value: ''});
  }

  render() {
    const { value } = this.state
    
    return (
      <InputForm
          handleSubmit={this.handleSubmit}
          handleChange={this.handleChange}
          value={value}
          title={'Add tweet:'}
        />
    );
  }
}

const mapStateToProps = state => {
    return {
      currUser: state.users.currUser
    }
 }

export default connect(mapStateToProps)(AddTwit)
