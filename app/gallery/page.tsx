import Gallery1 from "@/public/gallery/Galerie1.webp";
import Gallery2 from "@/public/gallery/Galerie2.webp";
import Gallery3 from "@/public/gallery/Galerie3.webp";
import Gallery4 from "@/public/gallery/Galerie4.webp";
import Gallery5 from "@/public/gallery/Galerie5.webp";
import Gallery6 from "@/public/gallery/Galerie6.webp";
import Gallery7 from "@/public/gallery/Galerie7.webp";
import Image from "next/image";
import styles from "./gallery.module.css";

export default function Gallery() {
  const images = [
    {
      src: Gallery7,
      col: 1,
    },
    {
      src: Gallery5,
      col: 2,
    },
    {
      src: Gallery4,
      col: 2,
    },
    {
      src: Gallery2,
      col: 1,
    },
    {
      src: Gallery3,
      col: 1,
    },
    {
      src: Gallery6,
      col: 1,
    },
    {
      src: Gallery1,
      col: 1,
    },
  ];
  return (
    <div className={styles.grid}>
      {images.map((img, index) => (
        <div key={index} style={{ gridColumn: `span ${img.col}` }}>
          <Image
            src={img.src}
            alt="img"
            style={{ objectFit: "contain", height: "600px" }}
          />
        </div>
      ))}
    </div>
  );
}
