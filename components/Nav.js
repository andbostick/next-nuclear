import Image from "next/image";
import Link from "next/link";
import MediaQuery from "react-responsive";

const logo =
  "https://images.ctfassets.net/pk5fqs6e1wc2/DdYzZeblPgkrt6LMEXcNw/f72a461d8d63dd16ff39fe028d7e60a2/nuclearLogo.png";
export default function Navbar() {
  return (
    <div className="logo">
      <MediaQuery maxWidth={1023}>
        <div className="img">
          <Image src={logo} height="275px" width="300px" />
        </div>
      </MediaQuery>
      <MediaQuery minWidth={1024}>
        <div className="nav">
          <Link href="/">
            <a>Movies</a>
          </Link>

          <Link href="/animes">
            <a>Animes</a>
          </Link>

          <Link href="/misc">
            <a>Misc</a>
          </Link>

          <Link href="/merch">
            <a>Merch</a>
          </Link>
        </div>
        <div className="img">
          <Image src={logo} height="275px" width="300px" />
        </div>
      </MediaQuery>
      <style jsx>
        {`
          .logo {
            position: relative;
            margin-bottom: 45px;
          }

          .img {
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -65%);
          }

          @media (min-width: 500px) {
            .logo {
              margin-bottom: 75px;
            }
          }

          @media (min-width: 768px) {
          }

          @media (min-width: 1024px) {
            .nav {
              
              display: flex;
              justify-content: space-around;
              color: white;
              background-color: rgba(0, 0, 0, 0.5);
            box-shadow: rgba(0, 0, 0, 0.16) 0px 3px 6px,
              rgba(0, 0, 0, 0.23) 0px 3px 6px;
            }
          }
        `}
      </style>
    </div>
  );
}
