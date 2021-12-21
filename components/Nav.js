import Image from "next/image";

const logo =
  "https://images.ctfassets.net/pk5fqs6e1wc2/DdYzZeblPgkrt6LMEXcNw/f72a461d8d63dd16ff39fe028d7e60a2/nuclearLogo.png?w=150&h=150&fit=pad";
export default function Navbar() {
  return (
    <div className="logo">
      <div className="img" ><Image src={logo} height="150px" width="150px" /></div>
      <style jsx>
        {`
        .logo{
          position: relative;
          margin-bottom: 55px;
        }
        .img{
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
        }
        `}
      </style>
    </div>
  );
}
