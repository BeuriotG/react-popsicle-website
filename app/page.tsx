import Image from "next/image";
import Carousel from "./components/carousel/carousel";
import ImgAcceuil from "@/public/home/trio_accueil.webp";
import styles from "./home.module.css";

export default function Home() {
  return (
    <>
      <article className={styles.container}>
        <Image
          src={ImgAcceuil}
          alt="Le trio pose en intérieur autour d'un amplificateur d'époque"
          quality={80}
          placeholder="blur"
          style={{ objectFit: "contain" }}
        />

        <section className={styles.carousel}>
          <h2 className="cinzelDecorative">QUI SOMMES NOUS?</h2>
          <p>
            Nous sommes les Popsicle Sisters, un trio vocal swing/jazz. Nous
            vous invitons dans notre univers retro, où se mêlent chants
            d&apos;après-guerre et chansons modernes, des plus grands standards
            de jazz aux hits pop du 21ème siècle revisités à la mode du swing !
          </p>
          <h2 className="cinzelDecorative">DÉCOUVRIR LES POPSICLE SISTERS</h2>
          <Carousel />
        </section>
      </article>
    </>
  );
}
