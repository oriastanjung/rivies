import React from "react";
import YouTube from "react-youtube";
import styles from "./DetailCard.module.css";
function DetailCard(props) {
  const renderTrailer = () => {
    const trailer = props.movie.videos?.results.find((vid) =>
      vid.name.includes("Official Trailer")
    );
    const otherOptionalTrailer = props.movie.videos.results[0];

    console.log("trailer >> ", trailer);
    if (trailer) {
      return (
        <>
          <YouTube
            videoId={trailer.key}
            iframeClassName={`${styles["youtube-container"]}`}
            title={""}
            opts={{
              playerVars: {
                // https://developers.google.com/youtube/player_parameters
                autoplay: 1,
                controls: 0,
                showInfo: 0,
                autoHide: 1,
                // playlist: 0,
                loop: 1,
                widget_referrer: 0,
                modestbranding: 0,
                annotation: 0,
                showInfo: 0,
                allowFullscreen: 1,
              },
            }}
            showInfo={false}
          />
          <button className={`${styles.btn}`} onClick={props.onClick}>
            Close
          </button>
        </>
      );
    } else if (otherOptionalTrailer) {
      return (
        <>
          <YouTube
            videoId={otherOptionalTrailer.key}
            iframeClassName={`${styles["youtube-container"]}`}
            title={""}
            opts={{
              playerVars: {
                // https://developers.google.com/youtube/player_parameters
                autoplay: 1,
                controls: 0,
                showInfo: 0,
                autoHide: 1,
                // playlist: 0,
                loop: 1,
                widget_referrer: 0,
                modestbranding: 0,
                annotation: 0,
                showInfo: 0,
                allowFullscreen: 1,
              },
            }}
            showInfo={false}
          />
          <button className={`${styles.btn}`} onClick={props.onClick}>
            Close
          </button>
        </>
      );
    } else {
      return (
        <>
          <p className="text-center mt-5">No Video Available to Show</p>
        </>
      );
    }
  };
  return (
    <header className="container mt-2">
      {/* {console.log("selected movie >> ", props.movie)} */}
      {props.movie.videos && props.play === true && renderTrailer()}

      {!props.play && (
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
      )}
    </header>
  );
}

export default DetailCard;
