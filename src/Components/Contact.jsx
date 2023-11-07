import PropTypes from "prop-types";
import "./Styles/contact.css";
 function Contact({ email, person }) {
  return (
    <>
      <h3> Contact</h3>
      <hr />
      <h4>Phone</h4>
      <p>{person.phone}</p>
      <h4>Email</h4>
      <p>{email}</p>
      <h4>Address</h4>
      <p>{person.address}</p>
      <h4>Linkdin</h4>
      <p>{person.linkdin}</p>
    </>
  );
}

Contact.propTypes = {
  email: PropTypes.string,
  person: PropTypes.object,
}


export default Contact