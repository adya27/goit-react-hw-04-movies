import React from "react";
import { useHistory, useLocation } from "react-router-dom";

import styles from "./ButtonGoBack.module.css";

function ButtonGoBack() {
  const location = useLocation();
  const history = useHistory();

  let isDisabled = !location.state?.from;
  const handleGoBack = () => {
    if (location.state?.from) {
      history.push(location.state.from);
    }
    return;
  };

  console.log("ButtonGoBack", location);

  return (
    <button
      disabled={isDisabled}
      className={styles.gradientButton}
      onClick={handleGoBack}
    >
      Go back
    </button>
  );
}

export default ButtonGoBack;
