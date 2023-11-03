import "./Styles/experience.css";

function Experience({ title, description, company, start, end }) {
  const descriptionArray = description.split('\n') //split description when the user presses enter

  return (
    <div className="description">
      <h4>{title}</h4>
      <div className="company">
        <p>{company}</p>
        <p>{start.split("-")[0]} - {end.split("-")[0]}</p>
      </div>
      <ul className="description-list">{descriptionArray.map((desc, index) => <li key={index}>{desc}</li>)}</ul>
    </div>
  );
}

export default Experience;
