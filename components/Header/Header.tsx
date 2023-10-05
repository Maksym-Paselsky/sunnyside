"use client";
import Image from "next/image";
import Button from "../Button/button";
import styles from "./header.module.scss";
import logo from "../../public/logo.svg";
export default function Header() {
  return (
    <nav className={styles.navbar}>
      <div className={styles.logo}>
        <Image src={logo} alt="logo" width={150} />
      </div>
      <ul className={styles.list}>
        <li>
          <a className={styles.link} href="/">
            About
          </a>
        </li>
        <li>
          <a className={styles.link} href="/">
            Services
          </a>
        </li>
        <li>
          <a className={styles.link} href="/">
            Projects
          </a>
        </li>
        <li>
          <Button
            text="Contact"
            onClick={() => console.log("contact")}
            className={styles.but}
          />
        </li>
      </ul>
    </nav>
  );
}
