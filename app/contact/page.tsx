import Image from "next/image";
import Contact from "@/public/contact/Contact.webp";
import Button from "@/app/components/clipboard/clipboard";
import styles from "./contact.module.css";

export default function ContactPage() {
  return (
    <div className={styles.contactPage}>
      <div className={styles.imgContainer}>
        <Image src={Contact} width={300} alt="img" placeholder="blur" />
      </div>
      <div className={styles.contactContainer}>
        <Button />
        <a
          className={styles.list}
          href="https://www.instagram.com/popsicle_sisters/"
          rel="noreferrer"
          target="_blank"
        >
          Instagram
        </a>
        <a
          className={styles.list}
          href="https://www.youtube.com/@PopsicleSisters"
          rel="noreferrer"
          target="_blank"
        >
          Youtube
        </a>
        <h2 className="cinzelDecorative">NOS HONORAIRES</h2>
        <p>Contactez-nous pour établir un devis de prestation sur mesure.</p>
      </div>
    </div>
  );
}
