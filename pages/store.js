import { useState, useRef, useEffect } from "react";
import { useOnClickOutside } from "../components/hooks";
import Burger from "../components/Burger";
import Menu from "../components/Menu";
import Navbar from "../components/Nav";

export default function Merch() {
  const [squareStatus, setSquareStatus] = useState(null);
  const [open, setOpen] = useState(false);
  const node = useRef();
  useOnClickOutside(node, () => setOpen(false));

  return (
    <div>
      <div ref={node}>
        <Burger open={open} setOpen={setOpen} />
        <Menu open={open} setOpen={setOpen} />
      </div>

      <Navbar />
      <p>welcome to my merch</p>
      <div className="merch-container">
        <img
          src="https://items-images-production.s3.us-west-2.amazonaws.com/files/d549838b146d79197a3fc84c1536f459e8254a59/original.jpeg"
          alt="Misc Final White"
          onerror="this.style.display='none'"
        />
        <div className="merch-descp">
          <p className="title">Misc Final White</p>
          <p className="price">$44.50 - $49.00</p>
          <a
            classname="buy-button"
            id="embedded-checkout-modal-checkout-button"
            target="_blank"
            data-url="https://square.link/u/c9ALvv3H?src=embd"
            href="https://square.link/u/c9ALvv3H?src=embed"
          >
            Buy now
          </a>
        </div>
      </div>
      <style jsx>{`
        .merch-container {
          overflow: auto;
          display: flex;
          flex-direction: column;
          justify-content: flex-end;
          align-items: center;
          width: 258.96px;
          background: #ffffff;
          border: 1px solid rgba(0, 0, 0, 0.1);
          box-shadow: -2px 10px 5px rgba(0, 0, 0, 0);
          border-radius: 10px;
          font-family: Libre Franklin, SQ Market, Helvetica, Arial, sans-serif;
        }

        img {
          width: 100%;
        }

        .merch-descp {
          padding: 20px;
        }
        .title {
          font-size: 18px;
          line-height: 20px;
        }

        .price {
          font-size: 18px;
          line-height: 20px;
          font-weight: 600;
        }
        .buy-button {
          display: inline-block;
          font-size: 18px;
          line-height: 48px;
          height: 48px;
          min-width: 212px;
          background-color: #006aff;
          color: #006aff;
          text-align: center;
          box-shadow: 0 0 0 1px rgba(0, 0, 0, 0.1) inset;
          border-radius: 50px;
        }
      `}</style>
    </div>
  );
}
