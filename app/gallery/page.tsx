"use client";
import Image from "next/image";
import ImgGallery1 from "@/public/gallery/Galerie1.webp";
import ImgGallery2 from "@/public/gallery/Galerie2.webp";
import ImgGallery3 from "@/public/gallery/Galerie3.webp";
import ImgGallery4 from "@/public/gallery/Galerie4.webp";
import ImgGallery5 from "@/public/gallery/Galerie5.webp";
import ImgGallery6 from "@/public/gallery/Galerie6.webp";
import ImgGallery7 from "@/public/gallery/Galerie7.webp";
import styles from "./gallery.module.css";
import { useState, Suspense, useEffect } from "react";
import { useSearchParams } from "next/navigation";

export default function GalleryPage() {
  return (
    <Suspense>
      <Gallery />
    </Suspense>
  );
}
function Gallery() {
  const searchParams = useSearchParams();

  const [photo, setPhoto] = useState(true);

  useEffect(() => {
    const tab = searchParams.get("tab");
    setPhoto(tab === "photos" ? true : false);
  }, [searchParams]);

  const images = [
    {
      src: ImgGallery7,
      col: 1,
      alt: "Le trio dans un décor d'intérieur",
    },
    {
      src: ImgGallery5,
      col: 2,
      alt: "Le trio devant un château",
    },
    {
      src: ImgGallery4,
      col: 2,
      alt: "Le trio devant une citroën d'époque",
    },
    {
      src: ImgGallery2,
      col: 1,
      alt: "Portait de Velvet",
    },
    {
      src: ImgGallery3,
      col: 1,
      alt: "Portrait de Betty",
    },
    {
      src: ImgGallery6,
      col: 1,
      alt: "Le trio pose autour d'un citroën d'époque",
    },
    {
      src: ImgGallery1,
      col: 1,
      alt: "Portait de Gigi",
    },
  ];
  return (
    <>
      <section className={styles.internalNavBar}>
        <button onClick={() => setPhoto(true)}>
          <h2 className="cinzelDecorative">PHOTOS</h2>
        </button>
        <button onClick={() => setPhoto(false)}>
          <h2 className="cinzelDecorative">VIDEOS</h2>
        </button>
      </section>
      {photo && (
        <article className={styles.gridPhoto}>
          {images.map((img, index) => (
            <div key={index} className={styles[`col${img.col}`] || styles.col1}>
              <Image
                src={img.src}
                alt={img.alt}
                style={{ objectFit: "contain", height: "auto", width: "100%" }}
                quality={80}
                placeholder="blur"
              />
            </div>
          ))}
        </article>
      )}
      {photo || (
        <article className={styles.gridVideo}>
          <iframe
            className={styles.video}
            src="https://www.youtube-nocookie.com/embed/8MeUDONDnE4"
            title="Les Popsicle Sisters - Teaser 2025"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          ></iframe>
          <iframe
            className={styles.video}
            src="https://www.youtube-nocookie.com/embed/osNPR_eocTE"
            title="Backstage - Présentation des Popsicle sister, un trio vocal swing/jazz"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          ></iframe>
        </article>
      )}
    </>
  );
}
