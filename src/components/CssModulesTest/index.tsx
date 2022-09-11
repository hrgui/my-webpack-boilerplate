import React from "react";
import styles from "./index.module.css";

type Props = {};

const CssModulesTest = (props: Props) => {
  return <div className={styles.header}>This repo supports CSS Modules.</div>;
};

export default CssModulesTest;
