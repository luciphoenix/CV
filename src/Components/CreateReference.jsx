import React from 'react'

function CreateReference({ referer, position, email, phone, onClick, onChange, id }) {
    return (
      <>
          <label htmlFor="refere">Referer</label>
          <input type="text" name="referer" id="referer" value={referer} onChange={(e)=>onChange(e,id)}/>
          <br />
          <label htmlFor="position">position</label>
          <input type="text" name="position" id="position" value={position} onChange={(e)=>onChange(e,id)}/>
          <br />
          <label htmlFor="phone">Phone</label>
          <input type="tel" name="contact" id="phone" value={phone} onChange={(e)=>onChange(e,id)}/>
          <br />
          <label htmlFor="email">Email</label>
          <input type="email" name="email" id="email" value={email} onChange={(e)=>onChange(e,id)}/>
          <br />
          <button type='button' onClick = {() => onClick(id)}>Delete</button>
            <button type='button'>edit</button>
          <br />          
      </>
  )
}

export default CreateReference