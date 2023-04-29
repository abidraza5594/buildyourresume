import React, { useState } from "react";
import "./popupform.css";

function PopUpForm() {
  const [isOpen, setIsOpen] = useState(false);
  const [formData, setFormData] = useState({
    position: "",
    company: "",
    startDate: "",
    endDate: "",
    description: "",
  });
  const [errors, setErrors] = useState({});

  const handleSubmit = (e) => {
    e.preventDefault();
    const errors = validateForm(formData);
    if (Object.keys(errors).length === 0) {
      // handle form submission logic here
      setIsOpen(false);
    } else {
      setErrors(errors);
      setIsOpen(true);
    }
  };

  

  function validateForm(data) {
    let errors = {};
    if (!data.position) {
      errors.position = "Position is required";
    }
    if (!data.company) {
      errors.company = "Company is required";
    }
    if (!data.startDate) {
      errors.startDate = "Start date is required";
    }
    if (!data.description) {
      errors.description = "Description is required";
    }
    return errors;
  }

  return (
    <div className="containerofpopup" style={{backgroundColor:"black"}}>

      <button style={{backgroundColor:"blue" ,cursor:"pointer"}} className="open-button"
       onClick={() => setIsOpen(true)}>
        Add Experience
      </button>

      <PopUp isOpen={isOpen} onClose={() => setIsOpen(false)}>
        <form onSubmit={handleSubmit} noValidate style={{backgroundColor:"black"}}>

          <div>

          <input placeholder="Position" type="text" id="position" name="position"
           value={formData.position} onChange={(e) => setFormData({ ...formData, position: e.target.value })} 
           style={{color:"white",backgroundColor:"black"}}/>
          {errors.position && <p className="error">{errors.position}</p>}

          </div>

          <div>
          <input placeholder="Company" type="text" id="company" name="company" value={formData.company} 
          onChange={(e) => setFormData({ ...formData, company: e.target.value })} 
          style={{color:"white",backgroundColor:"black"}}/>
          {errors.company && <p className="error">{errors.company}</p>}
          </div>

          <div>
          <input placeholder="Start Date" type="date" id="startDate" name="startDate" 
          value={formData.startDate} onChange={(e) => setFormData({ ...formData, startDate: e.target.value })}
           style={{color:"white",backgroundColor:"black"}}/>
          {errors.startDate && <p className="error">{errors.startDate}</p>}
          </div>

         <div>
          <input placeholder="End Date" type="date" id="endDate" name="endDate" value={formData.endDate}
           onChange={(e) => setFormData({ ...formData, endDate: e.target.value })}
            style={{color:"white",backgroundColor:"black"}}/>
         </div>

          <div>
          <textarea style={{backgroundColor:"black"}} placeholder="Description" id="description" name="description" value={formData.description}
           onChange={(e) => setFormData({ ...formData, description: e.target.value })} rows="6" cols="90" />
          {errors.description && <p className="error">{errors.description}</p>}

          </div>
          <button type="submit" style={{color:"white" ,cursor:"pointer",backgroundColor:"black"}}
          >Save Experience</button>
        </form>
      </PopUp>
    </div>
  );
}

function PopUp({ children, isOpen, onClose }) {
  return (
    <>
      {isOpen && (
        <>
          <div className="popup-overlay" onClick={onClose} />
          <div className="popup">
            <button className="close-button" onClick={onClose} style={{color:"red"}}>
              X
            </button>
            {children}
          </div>
        </>
      )}
    </>
  );
}

export default PopUpForm;
