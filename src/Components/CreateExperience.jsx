import React from "react";

function CreateExperience({ title, date, description, company, id, onChange, onClick }) {
  return (
    <>
      <label htmlFor="title">Title</label>
      <input type="text" name="title" id="title" value={title} onChange={(e) => onChange(e,id)}/>
      <br />
      <label htmlFor="company">Company/organisation</label>
      <input type="text" name="company" id="company" value={company} onChange={(e) => onChange(e,id)}/>
      <br />
      <textarea
        name="description"
        id="description"
        cols="30"
        rows="10"
        placeholder="write a little about the honour..."
        value={description}
        onChange={(e) => onChange(e,id)}></textarea>
      <br />
      <label htmlFor="date">Awarded Date</label>
      <input type="date" name="date" id="date" onChange={(e) => onChange(e, id)} value={ date} />
      <br />
      <button type='button' onClick = {() => onClick(id)}>Delete</button>
      <button type='button'>edit</button>
      <br />
    </>
  );
}

export default CreateExperience;
