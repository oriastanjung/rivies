import React from "react";
import styles from "./Card.module.css";
function Card(props) {
  return (
    <div
      className={`${styles.card}`}
      style={{
        backgroundImage: `url('https://image.tmdb.org/t/p/w500${props.img}')`,
      }}
      // onClick={() => props.onClick(props.movie)}
      onClick={props.onClick}
    >
      {/* {console.log(
        `url('https://image.tmdb.org/t/p/w500${props.img}') with title >> ${props.title}`
      )} */}
      <p className="px-5 text-center ">{props.title}</p>
    </div>
  );
}

export default Card;
