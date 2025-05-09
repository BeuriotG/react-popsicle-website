import Link from "next/link";
import styles from "./navbar.module.css";
import logo from "@/public/logo/Black and White Minimalist Professional Initial Logo 3.png";
import Image from "next/image";
export default function NavBar() {
  return (
    <div className={styles.navbar}>
      <div>{/* inner spacing */}</div>
      <Image
        alt="logo"
        src={logo}
        width={180}
        height={180}
        className="absolute"
      ></Image>

      <h1 className={styles.h1}>
        POPSICLE <span className="font-cinzel">SISTERS</span>
      </h1>
      <div className={styles.navbar_links}>
        <Link className="font-cinzel underline" href={`/`}>
          ACCUEIL
        </Link>
        <Link className="font-cinzel underline" href={`/prestations`}>
          PRESTATIONS
        </Link>
        <Link className="font-cinzel underline" href={`/gallery`}>
          GALERIE
        </Link>
        <Link className="font-cinzel underline" href={`/contact`}>
          CONTACT
        </Link>
      </div>
    </div>
  );
}
