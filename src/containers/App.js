import React, { Component } from 'react';
import { connect } from 'react-redux';
import { login, logOut, updateUserTwits } from '../modules/users'
import { addComent } from '../modules/twits'
import Users from '../components/Users'
import LogIn from './LogIn'
import Twits from '../components/Twits'
import AddTwit from './AddTwit'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      userTwits: [],
      twitsOwner: '',
    }
    this.showUserTwit = this.showUserTwit.bind(this)
    this.addComentValue = this.addComentValue.bind(this)
  }

  componentWillReceiveProps(nextProps) {
    const { currUser, dispatch } = this.props

    if (nextProps.twits.length != this.props.twits.length ) {
      const newTwit = nextProps.twits[nextProps.twits.length -1]
      dispatch(updateUserTwits(currUser, newTwit))
    }
  }

  showUserTwit(ev) {
    const userId = Number(ev.target.id) -1
    this.setState({
      userTwits:this.props.users[userId].twits,
      twitsOwner: this.props.users[userId].name
    })
  }

  addComentValue(value, id) {
    const { dispatch } = this.props
    this.setState({})
    dispatch(addComent(value, id))
  }

  render() {
    const { users, twits, isLogin, currUser } = this.props
    const { userTwits, twitsOwner, comentValue } = this.state

    return (
      <div className="App">
      { !isLogin ? <LogIn />
        :
      <section className='main-container'>
        <Users
          users={users}
          currUser={currUser}
          showUserTwit={this.showUserTwit}
        />
      <section className='twits-box'>
        <h2>Twits by: {twitsOwner}</h2>
        {
          userTwits.map(twit =>
            <Twits
              key={twit.id}
              twit={twit}
              addComentValue={this.addComentValue}
            />)
        }
      </section>
      <section className='twits-box'>
          <AddTwit />
          <h2>All twits: </h2>
            {
              twits.map(twit =>
                <Twits
                  key={twit.id}
                  twit={twit}
                  addComentValue={this.addComentValue}
                />)
            }
      </section>
      <div>
        <button onClick={() => this.props.dispatch(logOut())}>Exit</button>
      </div>
      </section>
        }
      </div>
    );
  }
}

const mapStateToProps = state => {
    return {
      users: state.users.users,
      twits: state.twits.twits,
      isLogin: state.users.isLogin,
      currUser: state.users.currUser
    }
 }

export default connect(mapStateToProps)(App);
