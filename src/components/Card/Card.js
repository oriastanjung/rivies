import React from "react";
import styles from "./Card.module.css";
function Card() {
  return (
    <div
      className={`${styles.card}`}
      style={{
        backgroundImage: `url('https://sm.ign.com/ign_ap/review/s/spider-man/spider-man-no-way-home-review_apww.jpg')`,
      }}
    >
      <p className="px-5 text-center ">Spiderman No Way Home</p>
    </div>
  );
}

export default Card;
