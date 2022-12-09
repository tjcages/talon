import React from "react";
import Image from "next/image";

import styles from "../styles/layout.module.scss";

import Logo from "./Logo";
import Mils from "./Mils";
import Lines from "./Lines";
import Flags from "./Flags";
import Map from "./Map";
import Relativity from "./Relativity";
import Callout from "./Callout";

const Layout = ({ children, gun }) => {
  return (
    <div className={styles.main}>
      {/* Header */}
      <div className={styles.tile}>
        <Image
          className={styles.corner}
          style={{ transform: "rotate(270deg)" }}
          src="/corner.svg"
          alt="corner"
          width={20}
          height={20}
        />
      </div>
      <div className={styles.tile}>
        <div className={styles.columns}>
          <Lines />
          <Logo />
          <Lines />
        </div>
      </div>
      <div className={styles.tile}>
        <Image
          style={{ transform: "rotate(0deg)" }}
          className={styles.corner}
          src="/corner.svg"
          alt="corner"
          width={20}
          height={20}
        />
      </div>

      {/* Content */}
      <div className={styles.tile}>
        <Mils />
      </div>
      <div className={styles.tile}>
        <div className={styles.content}>{children}</div>
      </div>
      <div className={styles.tile}>
        <Mils arrow />
      </div>

      {/* Footer */}
      <div className={styles.tile}>
        <Image
          style={{ transform: "rotate(180deg)" }}
          className={styles.corner}
          src="/corner.svg"
          alt="corner"
          width={20}
          height={20}
        />
      </div>
      <div className={styles.tile}>
        <div className={styles.columns}>
          <Lines />
          <Flags />
          <Lines />
        </div>
      </div>
      <div className={styles.tile}>
        <Image
          style={{ transform: "rotate(90deg)" }}
          className={styles.corner}
          src="/corner.svg"
          alt="corner"
          width={20}
          height={20}
        />
      </div>

      <Map />
      <Relativity />
      <Callout gun={gun} />
    </div>
  );
};

export default Layout;
