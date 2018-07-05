import React, { Component } from 'react';

const Users = props => {
  const { users, showUserTwit, currUser } = props

  return (
    <section className='users-box'>
      <h2>Users: </h2>
        {users.map(user =>
            <span
              className='user'
              onClick={showUserTwit}
              key={user.id}
              id={user.id}>
              {user.name}
            </span>
          )
        }
      <h2>{`You: ${currUser.name}`}</h2>
    </section>
  )
}

export default Users
