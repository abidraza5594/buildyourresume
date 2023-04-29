import "./footer.css"
import Fb from "../../assets/facebook.svg"
import Insta from "../../assets/instagram.svg"
import Twitter from "../../assets/twitter.svg"
import Youtube from "../../assets/youtube.svg"

function Footer() {
  return (
    <div className="maincontainer" style={{backgroundColor:"#eee" ,marginTop:"16px"}}>
        <div className="container" style={{backgroundColor:"#eee",marginTop:"5px"}}>
            <div style={{backgroundColor:"#eee"}}><img style={{backgroundColor:"#eee"}} src={Fb} alt="" /></div>
            <div style={{backgroundColor:"#eee"}}><img style={{backgroundColor:"#eee"}} src={Insta} alt="" /></div>
            <div style={{backgroundColor:"#eee"}}><img style={{backgroundColor:"#eee"}} src={Twitter} alt="" /></div>
            <div style={{backgroundColor:"#eee"}}><img style={{backgroundColor:"#eee"}} src={Youtube} alt="" /></div>
        </div>

        <div style={{backgroundColor:"#eee"}}>
            <p style={{backgroundColor:"#eee"}}>Copyright © 2023 abid ansari. All rights reserved.</p>
        </div>
    </div>
  );
}

export default Footer;
