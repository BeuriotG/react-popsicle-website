import Image from "next/image";
import ImgContact from "@/public/contact/Contact.webp";
import Button from "@/app/components/clipboard/clipboard";
import { LuInstagram } from "react-icons/lu";
import { LuYoutube } from "react-icons/lu";
import styles from "./contact.module.css";

export default function ContactPage() {
  return (
    <article className={styles.contactPage}>
      <Image
        src={ImgContact}
        alt="Betty tient un téléphone"
        placeholder="blur"
        quality={80}
      />

      <div className={styles.contactContainer}>
        <h2 className="cinzelDecorative">NOS RÉSEAUX SOCIAUX</h2>
        <br />
        <br />
        <a
          className={styles.list}
          href="https://www.instagram.com/popsicle_sisters/"
          rel="noreferrer"
          target="_blank"
        >
          <LuInstagram style={{ height: "1.4em", width: "1.4em" }} />
          Instagram
        </a>
        <a
          className={styles.list}
          href="https://www.youtube.com/@PopsicleSisters"
          rel="noreferrer"
          target="_blank"
        >
          <LuYoutube style={{ height: "1.4em", width: "1.4em" }} />
          Youtube
        </a>
        <br />
        <br />
        <h2 className="cinzelDecorative">NOS HONORAIRES</h2>
        <p>Contactez-nous pour établir un devis de prestation sur mesure.</p>
        <Button />
      </div>
    </article>
  );
}
