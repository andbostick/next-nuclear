export default function Burger({open, setOpen}) {
  return (
    <div>
      <div className="burger" open={open} onClick={() => setOpen(!open)}>
        <div />
        <div />
        <div />
      </div>
      <style jsx>
        {`
          .burger {
            position: absolute;
            top: 5%;
            left: 2rem;
            display: flex;
            flex-direction: column;
            justify-content: space-around;
            width: 2rem;
            height: 2rem;
            background: transparent;
            border: none;
            cursor: pointer;
            padding: 0;
            z-index: 10;
          }

          .burger:focus {
            outline: none;
          }

          .burger div{
            width: 2rem;
            height: 0.25rem;
            border-radius: 10px;
            background: ${open ? '#0D0C1D' : '#EFFFFA' };
            transition: all 0.3s linear;
            position: relative;
            transform-origin: 1px;
          }
          .burger div:first-child {
            transform: ${open ? 'rotate(45deg)' : 'rotate(0)'}
        }
        .burger div:nth-child(2) {
            opacity: ${open ? '0' : '1'};
            transform: ${open ? 'translateX(20px)' : 'translateX(0)'}
        }
        .burger div:nth-child(3) {
            transform: ${open ? 'rotate(-45deg)' : 'rotate(0)'}
        }
        `}
      </style>
    </div>
  );
}
