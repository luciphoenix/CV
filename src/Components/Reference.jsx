import PropTypes  from "prop-types";
import "./Styles/reference.css";

function Reference({ referer, position, email, contact }) {
  return (
    <>
      <div>
        <h4>{referer}</h4>
        <p>{position}</p>
        <p>Phone: {contact}</p>
        <p>
          Email:{" "}
          <a href="mailto:ebadu@gmail.com" className="email">
            {email}
          </a>
        </p>
      </div>
    </>
  );
}
Reference.propTypes = {
  referer: PropTypes.string,
  position: PropTypes.string,
  phone: PropTypes.string,
  contact: PropTypes.string,
  email: PropTypes.string,
}
export default Reference;
