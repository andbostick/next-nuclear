import Image from "next/image";

const logo =
  "https://images.ctfassets.net/pk5fqs6e1wc2/DdYzZeblPgkrt6LMEXcNw/f72a461d8d63dd16ff39fe028d7e60a2/nuclearLogo.png?w=150&h=150&fit=pad";
export default function Navbar() {
  return (
    <div className="logo">
      <Image className="img" src={logo} height="150px" width="150px" />
      <style jsx>
        {`
          .logo {
            width: 150px;
            height: 150px;
            border-radius: 50%;
            position: absolute;
            overflow: hidden;
            top:14.5%;
            left:30%;
          }
          .logo .img {
            min-width: 100%;
            min-height: 100%;
            width: auto;
            height: auto;
            position: absolute;
            left: 50%;
            top: 50%;
            -webkit-transform: translate(-50%, -50%);
            -moz-transform: translate(-50%, -50%);
            -ms-transform: translate(-50%, -50%);
            transform: translate(-50%, -50%);
          }
        `}
      </style>
    </div>
  );
}
