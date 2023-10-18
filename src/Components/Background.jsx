import "./Styles/background.css";

function Background({ person }) {
  return (
    <>
      <h3 className="name">
        {person.fname} {person.oname} {person.lname}
      </h3>
      <h4 className="position">{person.role}</h4>
      <div className="about">{person.description}</div>
    </>
  );
}

export default Background;
