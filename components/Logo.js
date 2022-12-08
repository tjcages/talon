import React from "react";
import Image from "next/image";

import styles from "../styles/logo.module.scss";

const Logo = () => {
  const array = [180, 0, 270, 90];
  return (
    <div className={styles.main}>
      <h1 className={styles.logo}>TALON</h1>
      {array.map((item, index) => (
        <Image
          key={index}
          className={styles.corner}
          style={{ transform: `rotate(${item}deg)` }}
          src="/corner.svg"
          alt="corner"
          width={20}
          height={20}
        />
      ))}
    </div>
  );
};

export default Logo;
