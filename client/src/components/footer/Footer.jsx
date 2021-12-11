import "./Footer.css";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import MailOutlineIcon from "@mui/icons-material/MailOutline";

const Footer = () => {
  return (
    <div className="Footer-Container">
      <div className="Footer-Left">
        <h1 className="Footer-Logo">MALBEC</h1>
        <p className="Footer-Description">
          Ecommerce Malbec made by Sebastian Velez using React, React Redux and
          Stripe for Payment API made with Express, MongoDB and Token config
          with JWT , all in docker with Docker Compose
        </p>
        <div className="FootersIcons-Container">
          <div className="Footer-Icons">
            <InstagramIcon />
          </div>
          <div className="Footer-Icons">
            <TwitterIcon />
          </div>
          <div className="Footer-Icons">
            <GitHubIcon />
          </div>
          <div className="Footer-Icons">
            <LinkedInIcon />
          </div>
        </div>
      </div>
      <div className="Footer-Center">
        <h2 className="Footer-Title">You may want to see</h2>
        <ul className="Footer-List">
          <li className="Footer-ListItem">Home</li>
          <li className="Footer-ListItem">Cart</li>
          <li className="Footer-ListItem">Shoes</li>
          <li className="Footer-ListItem">My Account</li>
          <li className="Footer-ListItem">My Order</li>
          <li className="Footer-ListItem">WishList</li>
        </ul>
      </div>
      <div className="Footer-Right">
        <h2 className="Footer-Title">Contact me</h2>
        <div className="Footer-ContactItem">
          <MailOutlineIcon style={{ marginRight: "10px" }} />
          Seborbon@outlook.com
        </div>
        <div className="Footer-ContactItem">
          Or click on the Social network icons!
        </div>
      </div>
    </div>
  );
};

export default Footer;
