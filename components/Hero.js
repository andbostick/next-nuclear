import Image from "next/image";

export default function Hero({ src, height, width }) {
  return <Image src={src} height={height} width={width} />;
}
