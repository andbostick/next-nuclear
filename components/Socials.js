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
        <a
          className="icon"
          href="https://www.tiktok.com/@nuclearhangover"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon icon={faTiktok} />
        </a>
        <a
          className="icon"
          href="https://www.instagram.com/nuclearhangover/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon icon={faInstagram} />
        </a>
        <a
          className="icon"
          href="https://discord.gg/nhQHWdp4gX"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon icon={faDiscord} />
        </a>
        <a
          className="icon"
          href="https://www.youtube.com/channel/UCX3DxT-TAZeOYLoWMuFWFkQ/about"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon icon={faYoutube} />
        </a>
        <a className="icon" href="https://www.patreon.com/nuclearhangover">
          <FontAwesomeIcon icon={faPatreon} />
        </a>
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
            color: white;
            gap: 20px;
            top: 40%;
            left: 10%;
            transform: translate(-40%, -28%);
            height: 100px;
            width: 40px;
            transition: top ease 0.5s;
          }
          .icon {
            position: relative;
            top: 0;
            transition: top ease 0.5s;
          }
          .icon:hover {
            top: -10px;
            color: grey;
          }
        `}
      </style>
    </div>
  );
}
