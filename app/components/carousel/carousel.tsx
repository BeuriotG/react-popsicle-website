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
    <div className={styles.embla} ref={emblaRef}>
      <div className={styles.embla__container}>
        <div className={styles.embla__slide}>
          <Link href={"/prestations"}>
            <Image
              src={ImgCarouselPresta}
              alt=""
              fill
              style={{ objectFit: "cover" }}
            />
          </Link>
        </div>
        <div className={styles.embla__slide}>
          <Link href={"/gallery"}>
            <Image
              src={ImgCarouselGallery}
              alt=""
              fill
              style={{ objectFit: "cover" }}
            />
          </Link>
        </div>
        <div className={styles.embla__slide}>
          <Link href={"/contact"}>
            <Image
              src={ImgCarouselContact}
              alt=""
              fill
              style={{ objectFit: "cover" }}
            />
          </Link>
        </div>
      </div>
    </div>
  );
}
