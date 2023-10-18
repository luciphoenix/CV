import React from "react";

function CreateLanguage({ lang, id, onChange, onClick,level }) {
  return (
    <div>
      <select name="lang" value={lang} id="language" onChange={(e)=>onChange(e,id)}>
        <option value="#"  disabled>
          ---- select language ---
        </option>
        <option value="English">English</option>
        <option value="Twi">Twi</option>
        <option value="Spanish">Spanish</option>
        <option value="French">French</option>
        <option value="Greek">Greek</option>
        <option value="Chiness">Chiness</option>
        <option value="Hebrew">Hebrew</option>
      </select>
      <br />
      <label htmlFor={`level${id}n`}>
        <input type="radio" name={`level${id}`} id={`level${id}n`} value="native" onChange={(e)=>onChange(e,id)}/>
        Native
      </label>
      <label htmlFor={`level${id}i`}>
        <input
          type="radio"
          name={`level${id}`}
          id={`level${id}i`}
          value="intermediate"
          onChange={(e) => onChange(e,id)}
        />
        Intermediate
      </label>
      <br />
      <button type='button' onClick = {() => onClick(id)}>Delete</button>
      <button type='button'>edit</button>
    </div>
  );
}

export default CreateLanguage;
