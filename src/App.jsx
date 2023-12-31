import { useState } from "react";
import CVDisplay from "./Components/CVDisplay";
import Create from "./Components/Create";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import "./App.css";

function App() {
  const [fname, setFname] = useState("John");
  const [lname, setLname] = useState("Nave");
  const [oname, setOname] = useState("Doe");
  const [email, setEmail] = useState("JohnDoe@gmail.com");
  const [phone, setPhone] = useState("023456789");
  const [role, setRole] = useState("Software Engineer");
  const [linkdin, setLinkdin] = useState("linkedin.com/in/john-doe");
  const [address, setAddress] = useState("356-645-1964");
  const [language, setLanguage] = useState([
    { id: 0, lang: "Spanish", level0: "native" },
    { id: 1, lang: "English", level1: "intermediate" },
  ]);
  const [description, setDescription] = useState(`Lorem ipsum, dolor sit amet consectetur adipisicing elit. Reiciendis ducimus, consectetur alias, accusamus iusto repellat adipisci fugit placeat dignissimos corporis neque impedit explicabo nobis ipsum quam eaque consequatur itaque maxime.
Inventore ex ipsa saepe cumque sit veniam debitis nobis nulla dignissimos doloribus similique dolores impedit dolorum aliquam dicta sint commodi eos consectetur praesentium molestiae, quis error. Veniam cupiditate modi nemo!
Sunt iure labore quam qui doloremque dolorem? Provident aliquam corrupti amet ullam! Eaque amet perspiciatis numquam. Harum provident autem blanditiis sequi maxime, non adipisci nisi veniam iusto hic culpa corrupti.`);
  const [reference, setReference] = useState([
    {
      id: 0,
      referer: "Enerst Badu",
      position: "senior Lecturer",
      contact: "024356768",
      email: "edoe@gmail.com",
    },
    {
      id: 1,
      referer: "Edward Badu",
      position: "senior Lecturer",
      contact: "067346273738378",
      email: "johnflinch@gmail.com",
    },
  ]);
  const [skills, setSkills] = useState([
    { id: 0, skill: "Javascript" },
    { id: 1, skill: "Ruby" },
    { id: 2, skill: "React" },
    { id: 3, skill: "Ethical Hacking" },
  ]);
  const [experience, setExperience] = useState([
    {
      id: 0,
      title: "Project manager",
      start: new Date().getFullYear().toString(),
      end: new Date().getFullYear().toString(),
      company: "Phoenix steel complex",
      description:
        `Lorem ipsum, dolor sit amet consectetur adipisicing elit. Reiciendis ducimus, consectetur alias, accusamus iusto repellat adipisci fugit placeat dignissimos corporis neque impedit explicabo nobis ipsum quam eaque consequatur itaque maxime.
Inventore ex ipsa saepe cumque sit veniam debitis nobis nulla dignissimos doloribus similique dolores impedit dolorum aliquam dicta sint commodi eos consectetur praesentium molestiae, quis error. Veniam cupiditate modi nemo!
Sunt iure labore quam qui doloremque dolorem? Provident aliquam corrupti amet ullam! Eaque amet perspiciatis numquam. Harum provident autem blanditiis sequi maxime, non adipisci nisi veniam iusto hic culpa corrupti.`
    },
    {
      id: 1,
      title: "Contract Administrator",
      start: new Date().getFullYear().toString(),
      end: new Date().getFullYear().toString(),
      company: "Luci construction limited",
      description:
`Lorem ipsum, dolor sit amet consectetur adipisicing elit. Reiciendis ducimus, consectetur alias, accusamus iusto repellat adipisci fugit placeat dignissimos corporis neque impedit explicabo nobis ipsum quam eaque consequatur itaque maxime.
Inventore ex ipsa saepe cumque sit veniam debitis nobis nulla dignissimos doloribus similique dolores impedit dolorum aliquam dicta sint commodi eos consectetur praesentium molestiae, quis error. Veniam cupiditate modi nemo!
Sunt iure labore quam qui doloremque dolorem? Provident aliquam corrupti amet ullam! Eaque amet perspiciatis numquam. Harum provident autem blanditiis sequi maxime, non adipisci nisi veniam iusto hic culpa corrupti.`    },
    {
      id: 2,
      title: "Quality Assurance",
      start: new Date().getFullYear().toString(),
      end: new Date().getFullYear().toString(),
      company: "Physic construction limited",
      description:
`Lorem ipsum, dolor sit amet consectetur adipisicing elit. Reiciendis ducimus, consectetur alias, accusamus iusto repellat adipisci fugit placeat dignissimos corporis neque impedit explicabo nobis ipsum quam eaque consequatur itaque maxime.
Inventore ex ipsa saepe cumque sit veniam debitis nobis nulla dignissimos doloribus similique dolores impedit dolorum aliquam dicta sint commodi eos consectetur praesentium molestiae, quis error. Veniam cupiditate modi nemo!
Sunt iure labore quam qui doloremque dolorem? Provident aliquam corrupti amet ullam! Eaque amet perspiciatis numquam. Harum provident autem blanditiis sequi maxime, non adipisci nisi veniam iusto hic culpa corrupti.`    },
  ]);
  const [nextschoolId, setNextSchoolId] = useState(2);
  const [nextExperienceId, setNextExperienceId] = useState(2);
  const [nextSkillId, setNextskillId] = useState(4);
  const [nextLanguageId, setNextLanguageId] = useState(2);
  const [nextReferenceId, setNextReferenceId] = useState(2);
  const [school, setSchool] = useState([
    { id: 0, school: "Harvard university", degree: "PhD.", program: "Biomedical Engineering" },
    {
      id: 1,
      school: "Adventist Senior High School",
      degree: "Bsc",
      program: "Quantity Surveying and Construction Economics",
    },
  ]);

  const cFname = (e) => {
    setFname(e.target.value);
  };
  const clinkdin = (e) => {
    setLinkdin(e.target.value);
  };
  const cAddress = (e) => {
    setAddress(e.target.value);
  };
  const cRole = (e) => {
    setRole(e.target.value);
  };
  const cLname = (e) => {
    setLname(e.target.value);
  };
  const cOname = (e) => {
    setOname(e.target.value);
  };
  const cEmail = (e) => {
    setEmail(e.target.value);
  };
  const handlePhone = (e) => {
    setPhone(e.target.value);
  };
  const cDescription = (e) => {
    setDescription(e.target.value);
  };
  const handleNewExperience = () => {
    setNextExperienceId(nextExperienceId + 1);
    setExperience((exp) => [
      ...exp,
      {
        id: nextExperienceId,
        title: "",
        date: "",
        company: "",
        description: "",
      },
    ]);
  };
  const handleNewReference = () => {
    setNextReferenceId(nextReferenceId + 1);
    setReference((ref) => [
      ...ref,
      {
        id: nextReferenceId,
        referer: "",
        position: "",
        contact: "",
        email: "",
      },
    ]);
  };
  const handleNewSchool = () => {
    setNextSchoolId(nextschoolId + 1);
    setSchool((sch) => [
      ...sch,
      { id: nextschoolId, school: "", degree: "", program: "" },
    ]);
  };

  const handleSkillDelete = (id) => {
    const newSkills = skills.filter((skill) => skill.id != id);
    setSkills(newSkills);
  };

  const handleSchoolDelete = (id) => {
    const newSchool = school.filter((sch) => sch.id != id);
    setSchool(newSchool);
  };
  const handleExperienceDelete = (id) => {
    const newExperience = experience.filter((exp) => exp.id != id);
    setExperience(newExperience);
  };
  const cSkill = (e, id) => {
    id = skills.findIndex((skill) => skill.id === id);
    const newSkills = skills.map((skill, index) => {
      if (index === id) {
        return { ...skill, [e.target.name]: e.target.value };
      } else {
        return skill;
      }
    });
    setSkills(newSkills);
  };

 

  function cSchool(e, id) {
    // make the target equal id equal to its current index incase of delete
    id = school.findIndex((sch) => sch.id === id);
    //
    const newSchool = school.map((sch, index) => {
      if (index === id) {
        return { ...sch, [e.target.name]: e.target.value };
      } else {
        return sch;
      }
    });
    setSchool(newSchool);
  }

  const person = {
    fname,
    cFname,
    lname,
    cLname,
    oname,
    cOname,
    email,
    cEmail,
    phone,
    handlePhone,
    address,
    cAddress,
    role,
    cRole,
    description,
    cDescription,
    linkdin,
    clinkdin,
  };

  const handleReference = (e, id) => {
    id = reference.findIndex((ref) => ref.id === id);
    const newReference = reference.map((ref, index) => {
      if (index === id) {
        return { ...ref, [e.target.name]: e.target.value };
      } else {
        return ref;
      }
    });
    setReference(newReference);
  };
  const handleReferenceDelete = (id) => {
    const newReference = reference.filter((ref) => ref.id != id);
    setReference(newReference);
  };
  const handleLanguageDelete = (id) => {
    const newLanguage = language.filter((ref) => ref.id != id);
    setLanguage(newLanguage);
  };
  const handleNewLanguage = () => {
    setNextLanguageId(nextLanguageId + 1);
    const newLanguage = [
      ...language,
      { id: nextLanguageId, lang: "English", [`level${nextLanguageId}`]: "" },
    ];
    setLanguage(newLanguage);
  };
  const handleNewSkill = () => {
    setNextskillId(nextSkillId + 1);
    const newSkills = [...skills, { id: nextSkillId, skill: "" }];
    setSkills(newSkills);
  };
  const handleLanguage = (e, id) => {
    id = language.findIndex((lang) => lang.id === id);
    const newLanguage = language.map((lang, index) => {
      if (index === id) {
        return { ...lang, [e.target.name]: e.target.value };
      } else {
        return lang;
      }
    });
    setLanguage(newLanguage);
    console.log(language);
  };
  const handleExperience = (e, id) => {
    id = experience.findIndex((exp) => exp.id === id);
    const newExperience = experience.map((exp, index) => {
      if (index === id) {
        return { ...exp, [e.target.name]: e.target.value };
      } else {
        return exp;
      }
    });
    setExperience(newExperience);
  };

  const skillData = {
    skills,
    cSkill,
    handleSkillDelete,
    handleNewSkill,
  };
  const edu = {
    school,
    cSchool,
    handleNewSchool,
    handleSchoolDelete,
  };
  const experiences = {
    experience,
    handleExperience,
    handleNewExperience,
    handleExperienceDelete,
  };
  const references = {
    reference,
    handleReference,
    handleReferenceDelete,
    handleNewReference,
  };
  const spoken = {
    language,
    handleLanguage,
    handleLanguageDelete,
    handleNewLanguage,
  };

  return (
    <div className="body">
      <Header />
      <Create
        person={person}
        edu={edu}
        experiences={experiences}
        skillData={skillData}
        references={references}
        spoken={spoken}
      />
      <CVDisplay
        person={person}
        edu={edu}
        skillData={skillData}
        experiences={experiences}
        references={references}
        spoken={spoken}
      />
      <Footer />
    </div>
  );
}

export default App;
