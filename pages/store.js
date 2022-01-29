import { useState, useRef, useEffect } from "react";
import { useOnClickOutside } from "../components/hooks";
import { createClient } from "contentful";
import MediaQuery from "react-responsive";

import Burger from "../components/Burger";
import Menu from "../components/Menu";
import Navbar from "../components/Nav";
import Products from "../components/Products";

export async function getStaticProps() {
  const client = createClient({
    space: process.env.CONTENTFUL_SPACE_ID,
    accessToken: process.env.CONTENTFUL_ACESS_KEY,
  });
  const res = await client.getEntries({ content_type: "store" });
  return {
    props: {
      store: res.items,
    },
  };
}

export default function Store({ store }) {
  const [squareStatus, setSquareStatus] = useState(null);
  const [open, setOpen] = useState(false);
  const node = useRef();
  useOnClickOutside(node, () => setOpen(false));
  store.map((prod) => { console.log(prod.fields.title) });
  
  return (
    <div>
    <MediaQuery maxWidth={1023}>
        <div ref={node}>
          <Burger open={open} setOpen={setOpen} />
          <Menu open={open} setOpen={setOpen} />
        </div>
</MediaQuery>
      <Navbar />
      <div className="store-container">
      <h1>Check Back Soon For Merch Store</h1>
      </div>
      <style jsx>{`
      .store-container{
        margin: 5rem;
        display:grid;
        grid-template-columns: 1fr;
        gap:5px;
      }
      `}</style>
    </div>
  );
}
