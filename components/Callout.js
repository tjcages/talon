import React from "react";
import Image from "next/image";

import styles from "../styles/callout.module.scss";

const Callout = ({ gun }) => {
  return (
    <div className={styles.main}>
      <div className={styles.statsBorder}>
        <div className={styles.stats}>
          <div className={styles.text}>{gun.name.toUpperCase()}</div>
          <Image
            className={styles.gun}
            src={gun.image}
            alt="gun"
            width={300}
            height={100}
          />
          <div className={styles.leftDecoration} />
          <div className={styles.rightDecoration} />
          <Image
            className={styles.compass}
            src="/compass.svg"
            alt="compass"
            width={25}
            height={25}
          />
        </div>
      </div>
      <div className={styles.horizontalLine} />
      <div className={styles.verticalLine} />
      <div className={styles.point} />
    </div>
  );
};

export default Callout;
