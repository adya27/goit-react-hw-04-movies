import React from "react";
import { useHistory } from "react-router-dom";

import styles from "./ButtonGoBack.module.css";

function ButtonGoBack() {
  const history = useHistory();
  const handleGoBack = () => {
    history.goBack();
  };

  return (
    <button className={styles.gradientButton} onClick={handleGoBack}>
      Go back
    </button>
  );
}

export default ButtonGoBack;
