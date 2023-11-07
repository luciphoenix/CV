import PropTypes from "prop-types";


function CreateExperience({
  title,
  start,
  end,
  description,
  company,
  id,
  onChange,
  onClick,
}) {
  return (
    <>
      {id > 0 && <hr className="divider" />}
      <div className="experiencef">
        <div>
          <label htmlFor="title">Title</label>
          <input
            type="text"
            name="title"
            id="title"
            value={title}
            onChange={(e) => onChange(e, id)}
          />
        </div>

        <div>
          <label htmlFor="company">Company/organisation</label>
          <input
            type="text"
            name="company"
            id="company"
            value={company}
            onChange={(e) => onChange(e, id)}
          />
        </div>

        <textarea
          className="experience-description"
          name="description"
          id="description"
          cols="30"
          rows="10"
          placeholder="write a little about the honour..."
          value={description}
          onChange={(e) => onChange(e, id)}
        ></textarea>

        <div>
          <label htmlFor="date">Awarded Date</label>
          <input
            type="date"
            name="start"
            id="date"
            onChange={(e) => onChange(e, id)}
            value={start}
          />
        </div>
        <div>
          <label htmlFor="date">Awarded Date</label>
          <input
            type="date"
            name="end"
            id="date"
            onChange={(e) => onChange(e, id)}
            value={end}
          />
        </div>

        <div>
          <button type="button" onClick={() => onClick(id)}>
            Delete
          </button>
        </div>
      </div>
    </>
  );
}

CreateExperience.propTypes = {
  title: PropTypes.string,
  start: PropTypes.string,
  end: PropTypes.string,
  description: PropTypes.string,
  company: PropTypes.string,
  id: PropTypes.number,
  onChange: PropTypes.func,
  onClick: PropTypes.func,
}

export default CreateExperience;
