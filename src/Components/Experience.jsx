import "./Styles/experience.css";

function Experience({title, description, company , date}) {
  return (
    <>
      <h4>{title}</h4>
      <div className="company">
        <p>{company}</p>
        <p>{date.split('-')[0]}</p>
      </div>
      <div className="description">{description}</div>
    </>
  );
}

export default Experience;
