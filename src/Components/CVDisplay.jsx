import Profile from "./Profile";
import Contact from "./Contact";
import Education from "./Education";
import Expertise from "./Expertise";
import Language from "./Language";
import Background from "./Background";
import Experience from "./Experience";
import Reference from "./Reference";
import "./Styles/cvdisplay.css";

function CVDisplay({ person, edu, skillData , experiences, references, spoken,}) {
  return (
    <>
      <div className="cv-display">
        <div className="first-div">
          <Profile person />
          <Contact email={person.email} person={person} />
          <div className="schoolD">
            <h3>Education</h3>
            <hr />
            {edu.school.map(sch => <Education name={sch.school} deg={sch.degree} program={sch.program}  /> )}
          </div>
          <div className="skill">
            <h3>Epertise</h3>
            <hr />
            {skillData.skills.map(skill => <Expertise skill={skill.skill} key={skill.id}/>)}
          </div>
          <div className="language">
            <h3>Languages</h3>
            <hr />
            {spoken.language.map(lang => <Language lang={lang.lang} level={lang[`level${lang.id}`]} id={lang.id} key={lang.id}/>)}
          </div>
          
        </div>
        <div className="second-div">
          <Background person={person} />
          <div className="experience">
            <h3>Experience</h3>
            <hr />
            <ul>
              {experiences.experience.map(exp => <Experience title={ exp.title } company={exp.company} date={exp.date} description={exp.description} key={exp.id}/>)}
            </ul>
          </div>
          <div>
            <h3>reference</h3>
            <hr />
            <div className="reference">
            {references.reference.map(ref => <Reference referer={ref.referer} key={ref.id} position={ref.position} email={ref.email} contact={ref.contact} />)}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default CVDisplay;
