import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTiktok } from "@fortawesome/free-brands-svg-icons";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import { faDiscord } from "@fortawesome/free-brands-svg-icons";
import { faYoutube } from "@fortawesome/free-brands-svg-icons";
import { faPatreon } from "@fortawesome/free-brands-svg-icons";
export default function Socials() {
  return (
    <div className="social-bar">
      <div className="icons">
        <a href="https://www.tiktok.com/@nuclearhangover" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faTiktok} /></a>
        <a href="https://www.instagram.com/nuclearhangover/" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faInstagram} /></a>
        <a><FontAwesomeIcon icon={faDiscord} /></a>
        <a href="https://www.youtube.com/channel/UCX3DxT-TAZeOYLoWMuFWFkQ/about" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faYoutube} /></a>
        <a href="https://www.patreon.com/nuclearhangover" ><FontAwesomeIcon icon={faPatreon} /></a>
      </div>
      <style jsx>
        {`
          .social-bar {
            position: relative;
           
            width: 200px;
            
          }
          .icons {
              
              
            display: flex;
            position: absolute;
            gap: 20px;
            top: 53%;
            left: 10%;
            transform: translate(-53%, -28%);
            height: 80px;
            width: 40px;
          }
        `}
      </style>
    </div>
  );
}
