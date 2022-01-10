import { useState, useRef, useEffect } from "react";
import { useOnClickOutside } from "../components/hooks";
import PaymentForm, {loadSquareSdk} from "../components/PaymentForm";
import Burger from "../components/Burger";
import Menu from "../components/Menu";
import Navbar from "../components/Nav";

export default function Merch() {
  const [squareStatus, setSquareStatus] = useState(null)
    const [open, setOpen] = useState(false);
  const node = useRef();
  useOnClickOutside(node, () => setOpen(false));
  useEffect(() => {
    loadSquareSdk()
      .then(() => {
        setSquareStatus("SUCCESS")
      })
      .catch(() => setSquareStatus("ERROR"))
  }, []) // on mount, add the js script dynamically
    return (
        
        <div>
      <div ref={node}>
        <Burger open={open} setOpen={setOpen} />
        <Menu open={open} setOpen={setOpen} />
            </div>
            
            <p>welcome to my merch</p>
        <Navbar />
        {squareStatus === "ERROR" &&
        "Failed to load SquareSDK. Please refresh the page."}
      {squareStatus === "SUCCESS" && (
        <PaymentForm paymentForm={window.SqPaymentForm} />
      )}
        </div>
    )
}