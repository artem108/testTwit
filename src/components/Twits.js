import React, { Component } from 'react';
import AddComent from '../containers/AddComent'

const Twits = props => {
  const { twit, comentValue, handleChange, addComentValue } = props

  return (
    <section>
      <span><h2>twit: {twit.text}</h2> <p>owner:{twit.owner.name}</p></span>
        {
          twit.coments.map(
          coment => <span key={coment.id}>Coment:{coment.text}</span>)
        }
        <AddComent twitId={twit.id} addComentValue={addComentValue}/>
    </section>
  )
}

export default Twits
