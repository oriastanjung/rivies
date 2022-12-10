import React from "react";
import styles from "./DetailCard.module.css";
function DetailCard(props) {
  return (
    <div className="container mt-2">
      <div
        className={` ${styles.detailCard} d-flex flex-column justify-content-end ${styles.hasBgImg}`}
        style={{
          backgroundImage: `url('https://image.tmdb.org/t/p/original${props.img}'`,
        }}
      >
        <div className={`${styles.description} py-5 px-4`}>
          <h3>{props.title}</h3>
          <p className="w-75">{props.overview}</p>
          <button className={`${styles.btn}`} onClick={props.onClick}>
            Play
          </button>
        </div>
      </div>
    </div>
  );
}

export default DetailCard;
