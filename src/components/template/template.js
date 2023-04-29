import "./template.css"
import { useState } from "react"
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';


function Template(props) {
  let skills = props.skills
  console.log("skilsssssss", skills)



  function downloadPDF() {

    const input = document.querySelector('.resume'); // replace with the ID of the HTML element you want to convert to PDF
    html2canvas(input).then((canvas) => {
      const pdf = new jsPDF('p', 'mm', 'a4');
      const imgData = canvas.toDataURL('image/png');
      const imgProps = pdf.getImageProperties(imgData);
      const pdfWidth = pdf.internal.pageSize.getWidth();
      const pdfHeight = (imgProps.height * pdfWidth) / imgProps.width;
      pdf.addImage(imgData, 'PNG', 0, 0, pdfWidth, pdfHeight);
      pdf.save('download.pdf'); // replace with the desired filename
    });
  }




  const [imageFile, setImageFile] = useState(null);
  const [imagePreview, setImagePreview] = useState('');


  console.log(props.UserDetailses)
  let details = props.UserDetailses


  const handleLiClick = (event) => {
    const li = event.target;
    li.setAttribute('contenteditable', true);
    li.focus();
    li.addEventListener('blur', () => {
      li.removeAttribute('contenteditable');
    });
  };


  const handleImageFile = (event) => {
    const file = event.target.files[0];
    setImageFile(file);

    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onloadend = () => {
      setImagePreview(reader.result);
    };
  };


  return (
    <>

      <div className="resume">
        <div className="header">
          <div className="image-container">
            <div className="photo" style={{ cursor: "pointer" }} >
              {!imagePreview && <input className="uploadimage" type="file" onChange={handleImageFile} />}
              {imagePreview && (
                <img
                  className="image"
                  src={imagePreview}
                  alt="Preview"
                />
              )}

            </div>
          </div>

{/* --------------------------------     Title Contact  ------------------------------------------ */}

          <div className="title">
            <h2> {details[0]}</h2>
            <h2> {details[1]}</h2>
          </div>
          <div className="contact">
            <p style={{marginRight:"20px"}}>Email: {details[2]}</p>
            <p style={{marginRight:"20px"}}>  Phone:{details[3]}</p>
            <p style={{marginRight:"20px"}}> Website: <a href={details[4]}>Link</a></p>
          </div>
      </div>

  {/* -------------------------------------   About ---------------------------------------------- */}
        <div className="about">
          <h3>About</h3>
          <p>
            {details[5]}
          </p>
        </div>
  {/* ----------------------------  Experience --------------------------------- */}

      <div className="experienceeducations">
      <div className="experience">
          <h3>Experience</h3>
          {details[6].map((data) =>
            <div className="job">
              <h4>{data.title}</h4>
              <h5>company : {data.company}</h5>
              <p>start date: {data.startDate}</p>
              <p>end date: {data.endDate}</p>
              <ul>
                <li onClick={handleLiClick}>Double Click me </li>
                <li onClick={handleLiClick}>Responsibility #2</li>
                <li onClick={handleLiClick}>Responsibility #3</li>
              </ul>
            </div>
          )}
        </div>
  {/* ------------------------------ Education --------------------------- */}
        <div className="education">
          <h3>Education</h3>
          {details[7].map((educa) =>
            <div className="school">
              <h4>degree: {educa.degree}</h4>
              <h5>school name :{educa.school}</h5>
              <h5>{educa.fieldOfStudy}</h5>
              <p>start date : {educa.startDate}</p>
              <p>send date : {educa.endDate}</p>
            </div>
          )}
        </div>

      </div>

{/* ------------------------------------ skills ---------------------------- */}
        <div className="skills">
          <h2>Skills</h2>
          <ul>
            {skills.map((skill, index) => (
              <li key={index}>
                {skill}

              </li>
            ))}
          </ul>
        </div>

      </div>


      <div className="download">
        <button onClick={downloadPDF}>Download</button>
      </div>
    </>
  );
}


export default Template;
 