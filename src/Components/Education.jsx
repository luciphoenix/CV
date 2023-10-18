import "./Styles/contact.css";

export default function Education({ name, deg, program }) {
  return (
    <>
      <h4>{name}</h4>
      <p>{deg} { program }</p>
      <p>2018 - 2023</p>
    </>
  );
}
