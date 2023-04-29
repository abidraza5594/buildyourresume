import React, { useState } from 'react';
import "./completedetailsform.css"
import Template from '../template/template';

function ResumeForm() {
  const [name, setName] = useState('');
  const [title, setTitle] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [website, setWebsite] = useState('');
  const [about, setAbout] = useState('');
  const [experience, setExperience] = useState([]);
  const [education, setEducation] = useState([]);

  const [isopen, setIsopen] = useState(false);

  const [UserDetailses, setUserDetails] = useState(null);

  const handleSubmit = (event) => {
    event.preventDefault();
   let  UserDetails=[name,title,email,phone,website,about,experience,education]
    setIsopen(true)
    setUserDetails(UserDetails)
    
  }

  const handleExperience = (event, index) => {
    const { name, value } = event.target;
    const updatedExperience = [...experience];
    updatedExperience[index][name] = value;
    setExperience(updatedExperience);
  }

  const handleEducation = (event, index) => {
    const { name, value } = event.target;
    const updatedEducation = [...education];
    updatedEducation[index][name] = value;
    setEducation(updatedEducation);
  }

  const addExperience = () => {
    setExperience([...experience, { company: '', title: '', startDate: '', endDate: '', description: '' }]);
  }

  const addEducation = () => {
    setEducation([...education, { school: '', degree: '', fieldOfStudy: '', startDate: '', endDate: '' }]);
  }

  // -------------------------------- skills -------------------------------

  const [skills, setSkills] = useState([]);
  const [newSkill, setNewSkill] = useState('');

  function handleNewSkillChange(event) {
    setNewSkill(event.target.value);
  }

  function handleNewSkillKeyDown(event) {
    if (event.key === 'Enter') {
      event.preventDefault();
      addNewSkill();
    }
  }

  function addNewSkill() {
    if (newSkill.trim() !== '') {
      setSkills([...skills, newSkill]);
      setNewSkill('');
    }
  }

  function removeSkill(indexToRemove) {
    setSkills(skills.filter((_, index) => index !== indexToRemove));
  }

  return (
    <>
    <form onSubmit={handleSubmit}>
    

      <div className="nametitle">
        <label>
        <input placeholder="Name" type="text" value={name} onChange={(event) => setName(event.target.value)} />
      </label>
      <br />
      <label>
        <input placeholder="Title" type="text" value={title} onChange={(event) => setTitle(event.target.value)} />
      </label>
      </div>

      <br />

     <div className="emailinput">
       <label>
        <input placeholder="Email" type="email" value={email} onChange={(event) => setEmail(event.target.value)} />
      </label>
     </div>

      <br />

      <div className="phonewebsite">
        <label>
        <input placeholder="Phone" type="tel" value={phone} onChange={(event) => setPhone(event.target.value)} />
      </label>
      <br />
      <label>
        <input placeholder="Website" type="url" value={website} onChange={(event) => setWebsite(event.target.value)} />
      </label>
      </div>

      <br />
      <label>
        <textarea placeholder="About" className="abouttextarea" value={about} onChange={(event) => setAbout(event.target.value)} />
      </label>

      <br />

      <div className="expericeeducation">
          
      <label>
    
        {experience.map((job, index) => (
          <div key={index}>
            <input type="text" placeholder="company" name="company" value={job.company} onChange={(event) => handleExperience(event, index)} />
            <input type="text" placeholder="title" name="title" value={job.title} onChange={(event) => handleExperience(event, index)} />
            <input type="text" placeholder="start date" name="startDate" value={job.startDate} onChange={(event) => handleExperience(event, index)} />
            <input type="text" placeholder="end date" name="endDate" value={job.endDate} onChange={(event) => handleExperience(event, index)} />
            <input type="text" placeholder="describtion" name="description" value={job.description} onChange={(event) => handleExperience(event, index)} />
          <hr/>
          </div>
        ))}
        <button type="button" onClick={() => addExperience()}>Add Experience</button>
        </label>
        <br />
        <label>
        
        {education.map((school, index) => (
        <div key={index}>
        <input type="text" placeholder="school" name="school" value={school.school} onChange={(event) => handleEducation(event, index)} />
        <input type="text"placeholder="degree" name="degree" value={school.degree} onChange={(event) => handleEducation(event, index)} />
        <input type="text" placeholder="fieldOfStudy" name="fieldOfStudy" value={school.fieldOfStudy} onChange={(event) => handleEducation(event, index)} />
        <input type="text" placeholder="startDate" name="startDate" value={school.startDate} onChange={(event) => handleEducation(event, index)} />
        <input type="text" placeholder="endDate" name="endDate" value={school.endDate} onChange={(event) => handleEducation(event, index)} />
           <hr/>
        </div>
        ))}
        <button type="button" onClick={() => addEducation()}>Add Education</button>
        </label>

      </div>  
      {/* ------------------------ skilss ------------------------------   */}
      <div className='skillscontainer'>
      <input className='addskills'
          type="text"
          placeholder="Add a skill and press enter"
          value={newSkill}
          onChange={handleNewSkillChange}
          onKeyDown={handleNewSkillKeyDown}
        />
      </div>  
      
      <br />
        <button className="generateresume" type="submit">Generate Resume</button>
        </form>

       {isopen &&  <Template UserDetailses={UserDetailses} skills={skills} setNewSkill={setNewSkill}/>}
        </>
);
}

export default ResumeForm;
