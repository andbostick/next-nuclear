import { useState, useRef } from "react";
import { useOnClickOutside } from "../components/hooks";
import Burger from "../components/Burger";
import Menu from "../components/Menu";
import Image from "next/image";

export default function Merch() {
    const [open, setOpen] = useState(false);
  const node = useRef();
  useOnClickOutside(node, () => setOpen(false));
    return (
        
        <div>
      <div ref={node}>
        <Burger open={open} setOpen={setOpen} />
        <Menu open={open} setOpen={setOpen} />
      </div>
        <p>welcome to my merch</p>
        </div>
    )
}