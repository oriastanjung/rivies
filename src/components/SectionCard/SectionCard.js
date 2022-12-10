import React from "react";
import styles from "./SectionCard.module.css";
function SectionCard(props) {
  return (
    <div className="container mt-5">
      <h4>{props.sectionTitle}</h4>
      <div className={`${styles.listCard}`}>{props.children}</div>
    </div>
  );
}

export default SectionCard;
