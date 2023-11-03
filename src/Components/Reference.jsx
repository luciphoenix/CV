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

export default Reference;
