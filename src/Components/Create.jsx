import "./Styles/create.css";
import Personal from "./Personal";
import CreateEdu from "./CreateEdu";
import CreateSkill from './CreateSkill'
import CreateReference from './CreateReference'
import { useState, useEffect } from "react";
import CreateExperience from "./CreateExperience";
import CreateLanguage from "./CreateLanguage";
import Language from "./Language";

function Create({ person, edu, email, cEmail , experiences, skillData, references,spoken,}) {
  // const [eduList, setEduList] = useState([]);
  // const handleAddSchool = () => {
  //   edu.handleNewSchool()
  // };
  // useEffect(
  //     () => ({
  //         useEduList(eduList.concat(<CreateEdu edu={edu} />))
  //     })
  // )

  return (
    <>
      <div className="createBody">
        <form action="#" method="post">
          <Personal person={person} />
          <div className="education">
            <h2>Education</h2>
            {edu.school.map(sch => <CreateEdu name={sch.school} deg={sch.degree} onChange={edu.cSchool} onClick={edu.handleSchoolDelete} program={sch.program} key={sch.id} id ={sch.id} />)}
            <button type="button" onClick={edu.handleNewSchool} className="add">
              ADD
            </button>
          </div>
          <div className="experiencec">
            <h2>Experience</h2>
            {experiences.experience.map(exp => <CreateExperience title={exp.title} onChange={experiences.handleExperience} date={exp.date} onClick={ experiences.handleExperienceDelete} company={exp.company} description={exp.description} key={exp.id} id={exp.id} />)}
            <button type="button" onClick={experiences.handleNewExperience} className="add">
              ADD
            </button>
          </div>
          <div className="skillc">
            <h2>Skills</h2>
            {skillData.skills.map(skill => <CreateSkill skill={skill.skill} id={skill.id} onChange={ skillData.cSkill } key={skill.id} onClick={skillData.handleSkillDelete}/>)}
            <button type="button" onClick={skillData.handleNewSkill} className="add">
              ADD
            </button>
          </div>
          <div className="languagec">
            <h2>Language</h2>
            {spoken.language.map(lang => <CreateLanguage lang={lang.lang} key={lang.id} level={lang[`level${lang.id}`]} id={lang.id} onChange={spoken.handleLanguage} onClick={spoken.handleLanguageDelete} />)}
            <button type="button" onClick={spoken.handleNewLanguage} className="add">
              ADD
            </button>
          </div>
          <div className="references">
            <h2>Reference</h2>
            {references.reference.map(ref => <CreateReference referer={ref.referer} onChange={references.handleReference} onClick={references.handleReferenceDelete} position={ref.position} id={ref.id} email={ref.email} phone={ref.contact} />)}
            <button type="button" onClick={references.handleNewReference} className="add">
              ADD
            </button>
          </div>
          <button className="submit">submit</button>
        </form>
      </div>
    </>
  );
}
export default Create;

// Create.propTypes = {
//   person: propTypes.object
// }