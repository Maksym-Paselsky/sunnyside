"use client";
import Image from "next/image";
import styles from "./header.module.scss";
import logo from "../../public/logo.svg";
import styled from "styled-components";

const Button = styled.button`
  margin-right: 40px;
  padding: 25px 35px;
  background-color: white;
  border: none;
  border-radius: 40px;
  color: black;
  font-family: var(--fraunces-font), sans-serif;
  font-size: 1.2rem;
  font-weight: 400;
`;

const Link = styled.a`
  margin-right: 40px;
  padding: 12px 25px;
  color: white;
  font-family: var(--barlow-font), sans-serif;
  font-size: 1.4rem;
  font-weight: 400;
  text-decoration: none;
`;

export default function Header() {
  return (
    <div>
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
    </div>
  );
}
