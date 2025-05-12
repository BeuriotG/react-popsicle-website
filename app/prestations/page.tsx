import styles from "./prestations.module.css";
import Image from "next/image";
import Prestation from "@/public/prestations/Prestations1.webp";
import Prestation2 from "@/public/prestations/Prestations-Noel.webp";
export default function Prestations() {
  return (
    <div className={styles.grid}>
      <div className={styles.left}>
        <div className={styles.rounded}>
          <Image
            alt="img"
            src={Prestation}
            style={{ position: "relative" }}
          ></Image>
        </div>
      </div>
      <div className={styles.center}>
        <h2 className="cinzelDecorative">CE QUE NOUS PROPOSONS</h2>
        <br />
        <p>
          Nous proposons des concerts et animations musicales (petits sets
          musicaux, happenings,...) pour vos événements : festivals, mariages,
          séminaires, et célébrations en tout genre. Nos prestations se font sur
          bande-son ou bien accompagnées de musiciens.",
        </p>
        <br />
        <h2 className="cinzelDecorative">SAISON DE NOËL</h2>
        <br />
        <p>
          Nous proposons également un répertoire de Noël pour célébrer les fêtes
          de fin d’année en chanson !
        </p>
      </div>
      <div className={styles.right}>
        <div className={styles.rounded}>
          <Image alt="img" src={Prestation2}></Image>
        </div>
      </div>
    </div>
  );
}
