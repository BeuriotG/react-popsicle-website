"use client";
import Link from "next/link";
import styles from "./navbar.module.css";
import { GiHamburgerMenu } from "react-icons/gi";
import logo from "@/public/logo/Black and White Minimalist Professional Initial Logo 3.png";
import Image from "next/image";
import { useState, useEffect } from "react";

export default function NavBar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [mouseOver, setMouseOver] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 900) {
        setIsOpen(false);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    const checkSize = () => {
      setIsMobile(window.innerWidth <= 900);
    };
    if (window.innerWidth > 900) {
      setIsOpen(false);
    }

    checkSize();
    window.addEventListener("resize", checkSize);
    return () => window.removeEventListener("resize", checkSize);
  }, []);

  const openMenu = () => setIsOpen(!isOpen);

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
      <div
        className={isOpen ? styles.navbar_links_mobile : styles.navbar_links}
      >
        <Link className="font-cinzel underline" href={`/`}>
          ACCUEIL
        </Link>
        <Link className="font-cinzel underline" href={`/prestations`}>
          PRESTATIONS
        </Link>
        <div
          onMouseEnter={() => setMouseOver(true)}
          onMouseLeave={() => setMouseOver(false)}
        >
          <span>
            <Link
              className="font-cinzel underline"
              href={`/gallery?tab=photos`}
            >
              GALERIE
            </Link>
          </span>
          {mouseOver && (
            <div className={styles.dropdown}>
              <Link href={`/gallery?tab=photos`}>Photos</Link>
              <Link href={`/gallery?tab=videos`}>Videos</Link>
            </div>
          )}
        </div>
        <Link className="font-cinzel underline" href={`/contact`}>
          CONTACT
        </Link>
      </div>
      {isMobile && (
        <button onClick={openMenu} className={styles.menu}>
          <GiHamburgerMenu />
        </button>
      )}
    </div>
  );
}
