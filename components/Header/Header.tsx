"use client";
import Image from "next/image";
import styles from "./header.module.scss";
import logo from "../../public/logo.svg";
import styled from "styled-components";

const Button = styled.button`
  font-family: var(--fraunces-font), sans-serif;
  font-size: 1.2rem;
  background: white;
  font-weight: 400;
  border: none;
  color: black;
  border-radius: 40px;
  margin-right: 40px;
  padding: 25px 35px;
`;

const Link = styled.a`
  font-family: var(--barlow-font), sans-serif;
  font-size: 1.4rem;
  font-weight: 400;
  color: white;
  text-decoration: none;
  margin-right: 40px;
  padding: 12px 25px;
`;

export default function Header() {
  return (
    <nav className={styles.navbar}>
      <div className={styles.logo}>
        <Image src={logo} alt="logo" width={150} />
      </div>
      <ul className={styles.list}>
        <li>
          <Link>About</Link>
        </li>
        <li>
          <Link href="/">Services</Link>
        </li>
        <li>
          <Link href="/">Projects</Link>
        </li>
        <li>
          <Button>CONTACT</Button>
        </li>
      </ul>
    </nav>
  );
}
