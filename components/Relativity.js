import React from "react";

import styles from "../styles/relativity.module.scss";

const Relativity = (props) => {
  return (
    <div className={styles.main}>
      <div className={styles.inner}>
        <div className={styles.map} />
        <div className={styles.text}>Relativity</div>
        <div className={styles.text}>80m</div>
      </div>
    </div>
  );
};

export default Relativity;
