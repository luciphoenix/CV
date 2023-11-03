import "./Styles/experience.css";

function Experience({ title, description, company, date }) {
  const descriptionArray = description.split('\n') //split description when the user presses enter

  return (
    <>
      <h4>{title}</h4>
      <div className="company">
        <p>{company}</p>
        <p>{date.split("-")[0]}</p>
      </div>
      <ul className="description">{descriptionArray.map((desc, index) => <li key={index}>{desc}</li>)}</ul>
    </>
  );
}

export default Experience;
