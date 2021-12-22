import Image from "next/image";

const logo =
  "https://images.ctfassets.net/pk5fqs6e1wc2/DdYzZeblPgkrt6LMEXcNw/f72a461d8d63dd16ff39fe028d7e60a2/nuclearLogo.png";
export default function Navbar() {
  return (
    <div className="logo">
      <div className="img" ><Image src={logo} height="275px" width="300px" /></div>
      <style jsx>
        {`
        .logo{
          position: relative;
          margin-bottom: 45px;
        }
        .img{
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -65%);
        }
        `}
      </style>
    </div>
  );
}
