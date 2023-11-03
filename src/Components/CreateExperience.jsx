
function CreateExperience({
  title,
  date,
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
            name="date"
            id="date"
            onChange={(e) => onChange(e, id)}
            value={date}
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

export default CreateExperience;
