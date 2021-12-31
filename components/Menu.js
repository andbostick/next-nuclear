import Link from "next/link";
import Socials from "./Socials";
export default function Menu({ open }) {
  return (
    <>
      <div open={open}>
        
          <Socials />
          
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
      <style jsx>
        {`
          
          div {
            display: flex;
            flex-direction: column;
            justify-content: center;
            background: white;
            height: 100vh;
            text-align: left;
            padding: 2rem;
            position: absolute;
            top: 0;
            left: 0;
            transition: transform 0.3s ease-in-out;
            transform: ${open ? "translateX(0)" : "translateX(-100%)"};
            z-index: 2;
  
        }
        @media (max-width: 576px) {
            div {
          width: 100%;
            }
            a{
                font-size: 1.5rem;
                text-align: center;
            }
        }
            a {
              font-size: 2rem;
              text-transform: uppercase;
              padding: 2rem 0;
              font-weight: bold;
              letter-spacing: 0.5rem;
              color: black;
              text-decoration: none;
              transition: color 0.3s linear;

              
            }
            a:hover {
              color: #343078;
            }
            
          }

        `}
      </style>
    </>
  );
}
