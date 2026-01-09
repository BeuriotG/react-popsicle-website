import Image from "next/image";
import ImgPrestation from "@/public/prestations/Prestations1.webp";
import ImgPrestation2 from "@/public/prestations/Prestations-Noel.webp";
import styles from "./prestations.module.css";
export default function Prestations() {
  return (
    <>
      <article className={styles.grid}>
        <div className={styles.left}>
          <Image
            alt="Le trio en intérieur"
            src={ImgPrestation}
            style={{ objectFit: "contain", height: "100%" }}
            placeholder="blur"
            quality={80}
          ></Image>
        </div>
        <section className={styles.center}>
          <div>
            <h2 className="cinzelDecorative">CE QUE NOUS PROPOSONS</h2>
            <br />
            <p>
              Nous proposons des concerts et animations musicales (petits sets
              musicaux, happenings,...) pour vos événements : festivals,
              mariages, séminaires, et célébrations en tout genre. Nos
              prestations se font sur bande-son ou bien accompagnées de
              musiciens.
            </p>
          </div>

          <div>
            <h2 className="cinzelDecorative">SAISON DE NOËL</h2>
            <br />
            <p>
              Nous proposons également un répertoire de Noël pour célébrer les
              fêtes de fin d’année en chanson !
            </p>
          </div>
        </section>
        <div className={styles.right}>
          <Image
            alt="Le trio version Noël"
            src={ImgPrestation2}
            style={{ objectFit: "contain", height: "100%" }}
            placeholder="blur"
            quality={80}
          ></Image>
        </div>
      </article>
    </>
  );
}
