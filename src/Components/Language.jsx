import "./Styles/contact.css";

function Language({ lang, id, level }) {
  return (
    <>
      <li key={id}>
        {lang} ({level})
      </li>
    </>
  );
}
export default Language;
