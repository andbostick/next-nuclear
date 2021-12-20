import Image from "next/image";

const logo =
  "https://images.ctfassets.net/pk5fqs6e1wc2/DdYzZeblPgkrt6LMEXcNw/f72a461d8d63dd16ff39fe028d7e60a2/nuclearLogo.png?w=200&h=200&fit=pad";
export default function Navbar() {
  return (
    <div className="logo">
      <Image className="img" src={logo} height="200px" width="200px" />
      <style jsx>
        {`
          .logo {
            width: 200px;
            height: 200px;
            border-radius: 50%;
            position: absolute;
            overflow: hidden;
            top:12%;
            left:23%;
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
