import classes from "./header.module.css"
import resume from "../../assets/resume.svg"
function Header() {
  return (
    <div className={classes.container} style={{backgroundColor:"white"}}>
        <div className={classes.left_container} style={{fontSize:"30px",backgroundColor:"white"}}>
            A <span style={{color:"blue",backgroundColor:"white"}}>Resume</span> that <br />
            stands out! <br />
            Make your own
            resume. <span style={{color:"blue",backgroundColor:"white"}}>It's free</span>
        </div>
        <div className={classes.right_container} style={{backgroundColor:"white"}}>
            <img style={{backgroundColor:"white"}} src={resume} className={classes.resumeimg} alt="" />
        </div>
    </div>
  );
}

export default Header;
