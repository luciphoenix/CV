import PropTypes from "prop-types";


function CreateReference({
  referer,
  position,
  email,
  phone,
  onClick,
  onChange,
  id,
}) {
  return (
    <>
      {id > 0 && <hr className="divider" />}
      <div className="referencef">
        <div>
          <label htmlFor="refere">Referer</label>
          <input
            type="text"
            name="referer"
            id="referer"
            value={referer}
            onChange={(e) => onChange(e, id)}
          />
        </div>

        <div>
          <label htmlFor="position">position</label>
          <input
            type="text"
            name="position"
            id="position"
            value={position}
            onChange={(e) => onChange(e, id)}
          />
        </div>

        <div>
          <label htmlFor="phone">Phone</label>
          <input
            type="tel"
            name="contact"
            id="phone"
            value={phone}
            onChange={(e) => onChange(e, id)}
          />
        </div>

        <div>
          <label htmlFor="email">Email</label>
          <input
            type="email"
            name="email"
            id="email"
            value={email}
            onChange={(e) => onChange(e, id)}
          />
        </div>

        <button type="button" onClick={() => onClick(id)}>
          Delete
        </button>
      </div>
    </>
  );
}

CreateReference.propTypes = {
  referer: PropTypes.string,
  position: PropTypes.string,
  phone: PropTypes.string,
  onClick: PropTypes.func,
  onChange: PropTypes.func,
  email: PropTypes.string,
  id: PropTypes.number,
}

export default CreateReference;
