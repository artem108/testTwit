import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addComent } from '../modules/twits'
import InputForm from '../components/InputForm'

class AddComent extends Component {
  constructor(props) {
    super(props)
    this.state = {
      value: ''
    }
    this.addComent = this.addComent.bind(this)
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  addComent(event) {
    const {twitId, addComentValue } = this.props
    const { value } = this.state
    const id = Number(twitId) -1

    addComentValue(value, id)
    this.setState({value: ''});
  }

  render() {
     return(
       <InputForm
         value={this.state.value}
         handleSubmit={this.addComent}
         handleChange={this.handleChange}
         title={'Add coment'}
       />
     )
  }
}

const mapStateToProps = state => {
    return {
      currUser: state.users.currUser
    }
 }

 export default connect(mapStateToProps)(AddComent);
