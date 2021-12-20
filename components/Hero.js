import Image from "next/image";

export default function Hero({ src, height, width }) {
  return <div><Image src={src} height={height} width={width} />;
    <style jsx>
      {`
      div{
        margin-bottom: 40px;
      }
      `}
    </style>
  </div>
}
