import "./Footer.css";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import { Link } from "react-router-dom";

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
          <a
            className="Footer-Icons"
            href="https://www.instagram.com/sebastb25/"
          >
            <InstagramIcon />
          </a>
          <a className="Footer-Icons" href="https://twitter.com/SebastFlower">
            <TwitterIcon />
          </a>
          <a className="Footer-Icons" href="https://github.com/SebastBorbon">
            <GitHubIcon />
          </a>
          <a className="Footer-Icons" href="https://www.linkedin.com/login/es">
            <LinkedInIcon />
          </a>
        </div>
      </div>
      <div className="Footer-Center">
        <h2 className="Footer-Title">You may want to see</h2>
        <ul className="Footer-List">
          <li className="Footer-ListItem">
            <Link to="/" className="Footer-Link">
              Home
            </Link>
          </li>
          <li className="Footer-ListItem">
            <Link to="/cart" className="Footer-Link">
              Cart
            </Link>
          </li>
          <li className="Footer-ListItem">
            <Link to="/products/shoes" className="Footer-Link">
              Shoes
            </Link>
          </li>
          <li className="Footer-ListItem">
            <Link to="/products/shoes" className="Footer-Link">
              My Account
            </Link>
          </li>
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
