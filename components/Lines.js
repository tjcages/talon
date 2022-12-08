import React from "react";

import styles from "../styles/lines.module.scss";

const Lines = (props) => {
  const array = [...Array(25).keys()];

  return (
    <div className={`${styles.main} ${props.arrow && styles.reverse}`}>
      {array.map((mil, index) => (
        <div key={index} className={styles.mil} />
      ))}
    </div>
  );
};

export default Lines;
