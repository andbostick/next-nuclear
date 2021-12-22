import Image from "next/image";

export default function Episodes({
  episodeTitle,
  rating,
  uploadDate,
  src,
  width,
  height,
}) {
  return (
    <div className="episode-card">
      <div className="episode-image">
        {!src ? (
          "no image available"
        ) : (
          <Image src={"https://" + src} width='150px' height='150px' />
        )}
      </div>
      <h2 className="episode-title">{episodeTitle}</h2>
      <p>Episode Rating:{rating}</p>
      <p>Publish Date:{uploadDate}</p>

      <style jsx>
        {`
          .episode-card {
            display: grid;
            grid-template-columns: 1fr 1fr 1fr;
            font-size: 12px;
            font-family: "Lucida Console", "Courier New", monospace;
            border-radius: 5px;
            padding: 10px;
            margin: 1rem auto 1rem auto;
            background-color: rgba(0, 0, 0, 0.5);
            box-shadow: rgba(0, 0, 0, 0.16) 0px 3px 6px,
              rgba(0, 0, 0, 0.23) 0px 3px 6px;
          }
          .episode-image {
            grid-row-end: span 2;
            justify-self: center;
          }
          .episode-title{
              grid-column-end: span 2;
          }
        `}
      </style>
    </div>
  );
}
