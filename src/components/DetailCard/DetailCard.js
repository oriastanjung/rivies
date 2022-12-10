import React from "react";
import styles from "./DetailCard.module.css";
function DetailCard(props) {
  return (
    <div className="container mt-2">
      <div
        className={` ${styles.detailCard} d-flex flex-column justify-content-end ${styles.hasBgImg}`}
        style={{
          backgroundImage:
            "url('https://img.tek.id/img/content/2020/01/03/24173/avengers-endgame-kembali-ungguli-avatar-rLuWTbVISy.jpg'",
        }}
      >
        <div className={`${styles.description} py-5 px-4`}>
          <h3>Avengers Endgame</h3>
          <p className="w-75">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam in
            erat feugiat, egestas sem non, viverra nunc. Curabitur ex felis,
            pretium id lacinia fringilla, consectetur eget nibh. Maecenas tortor
            enim, vestibulum sed dui eget, mollis maximus felis. Sed cursus enim
            eget nibh finibus, vel rhoncus enim tristique. Vestibulum tempus
            posuere tempus. Nulla tincidunt ullamcorper nulla. Mauris accumsan
            et ligula eget pellentesque
          </p>
          <button className={`${styles.btn}`}>Play</button>
        </div>
      </div>
    </div>
  );
}

export default DetailCard;
