import React from "react";
import Image from "next/image";

import styles from "../styles/flags.module.scss";

const Flags = (props) => {
  return (
    <div className={styles.main}>
      <video className={styles.video} controls={false} loop muted autoPlay playsInline>
        <source src={"/usa.mov"} />
      </video>
      <Image src="/globe.svg" alt="globe" width={80} height={40} />
      <video className={styles.video} controls={false} loop muted autoPlay playsInline>
        <source src={"/uae.mov"} />
      </video>
    </div>
  );
};

export default Flags;
