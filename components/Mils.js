import React from "react";

import styles from "../styles/mils.module.scss";

const Mils = (props) => {
  const array = [...Array(71).keys()];

  return (
    <div className={`${styles.main} ${props.arrow && styles.reverse}`}>
      {array.map((mil, index) => {
        const val = index % 5 === 0 ? 10 : 0;
        if (val == 10) {
          return (
            <div key={index} className={styles.indicator}>
              {props.arrow === undefined && (
                <div className={styles.marker}>{val * index}</div>
              )}
              <div className={styles.mil} />
            </div>
          );
        } else {
          return <div key={index} className={styles.mil} />;
        }
      })}
    </div>
  );
};

export default Mils;
