import React from "react";

import styles from "../styles/map.module.scss";

const Map = (props) => {
  return (
    <div className={styles.main}>
      <div className={styles.inner}>
        <div className={styles.map} />
        <div className={styles.columns}>
          <div className={styles.column}>{`width: 100%;
    height: 100%;
    margin: auto auto 0 auto;
    // z-index: 1;`}</div>
          <div className={styles.separator} />
          <div className={styles.column}>{`// width: 100%;
    // height: 100%;`}</div>
        </div>
      </div>
    </div>
  );
};

export default Map;
