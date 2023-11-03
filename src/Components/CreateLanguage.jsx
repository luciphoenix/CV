import React from "react";

function CreateLanguage({ lang, id, onChange, onClick, level }) {
  return (
    <>
      {id > 0 && <hr className="divider" />}
      <div className="languagef">
        <select
          name="lang"
          value={lang}
          id="language"
          onChange={(e) => onChange(e, id)}
        >
          <option value="#" disabled>
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

        <label htmlFor={`level${id}n`}>
          <input
            type="radio"
            className="radio-input"
            name={`level${id}`}
            id={`level${id}n`}
            value="native"
            onChange={(e) => onChange(e, id)}
          />
          Native
        </label>
        <label htmlFor={`level${id}i`}>
          <input
            type="radio"
            className="radio-input"
            name={`level${id}`}
            id={`level${id}i`}
            value="intermediate"
            onChange={(e) => onChange(e, id)}
          />
          Intermediate
        </label>

        <button type="button" onClick={() => onClick(id)}>
          Delete
        </button>
      </div>
    </>
  );
}

export default CreateLanguage;
