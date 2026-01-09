"use client";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import styles from "./carousel.module.css";
import Image from "next/image";
import Link from "next/link";
import ImgCarouselPresta from "@/public/home/Lien_Presta.webp";
import ImgCarouselGallery from "@/public/home/Lien_Galerie.webp";
import ImgCarouselContact from "@/public/home/Lien_Contact.webp";

export default function EmblaCarousel() {
  const [emblaRef] = useEmblaCarousel({ loop: true }, [Autoplay()]);

  return (
    <article className={styles.embla} ref={emblaRef}>
      <div className={styles.embla__container}>
        <div className={styles.embla__slide}>
          <Link href={"/prestations"}>
            <Image
              src={ImgCarouselPresta}
              alt="Le trio en intérieur, lien vers la page de prestation"
              sizes="auto"
              fill
              quality={80}
            />
          </Link>
        </div>
        <div className={styles.embla__slide}>
          <Link href={"/gallery"}>
            <Image
              src={ImgCarouselGallery}
              alt="Le trio devant un château, lien vers la page de galerie"
              sizes="auto"
              fill
              quality={80}
            />
          </Link>
        </div>
        <div className={styles.embla__slide}>
          <Link href={"/contact"}>
            <Image
              src={ImgCarouselContact}
              alt="Gigi au téléphone, lien vers la page de contact"
              sizes="auto"
              fill
              quality={80}
            />
          </Link>
        </div>
      </div>
    </article>
  );
}
