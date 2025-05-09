import Image from "next/image";
import trioAcceuil from "@/public/gallery/trio_accueil.webp";

export default function Gallery() {
  return (
    <div>
      <h1>This is the gallery page</h1>
      <h1 className="quattrocento">This is the gallery page</h1>
      <h1 className="cinzelDecorative">This is the gallery page</h1>
      <Image alt="image du trio" src={trioAcceuil}></Image>
    </div>
  );
}
