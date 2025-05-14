"use client";
import { useState } from "react";
import { LuClipboard } from "react-icons/lu";
import { LuClipboardCheck } from "react-icons/lu";
import styles from "./clipboard.module.css";

export default function Button() {
  const [copied, setCopied] = useState(false);
  const copyToClipBoard = () => {
    navigator.clipboard.writeText("popsisclesisterstrio@gmail.com");
    setCopied(true);
    setTimeout(() => setCopied(false), 3000);
  };
  return (
    <>
      {copied ? (
        <p>Email copié dans le presse-papier</p>
      ) : (
        <p>Copier l&apos;email en cliquant le boutton du dessous</p>
      )}
      <button className={styles.button} onClick={copyToClipBoard}>
        popsiclesisterstrio@gmail.com
        {copied ? <LuClipboardCheck /> : <LuClipboard />}
      </button>
    </>
  );
}
