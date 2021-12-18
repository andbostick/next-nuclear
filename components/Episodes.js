import Image from "next/image";

export default function Episodes({ episodeTitle, rating, uploadDate, src, width, height }) {
  return (
      <div className="episode-card">
          {!src ? 'no image available' : <Image
            src={'https://' + src}
            width={width}
            height={height}
        />}
          
      <h2>{episodeTitle}</h2>
      <p>{rating}</p>
      <p>{uploadDate}</p>

      <style jsx>
        {`
          .episode-card {
            display: grid;
            grid-template-columns: 1fr 1fr 1fr 1fr;
            font-size: 12px;
            font-family: "Lucida Console", "Courier New", monospace;
            border-radius: 5px;
            padding: 10px;
            margin: 1rem auto 1rem auto;
            background-color: rgba(0, 0, 0, 0.5);
            box-shadow: rgba(0, 0, 0, 0.16) 0px 3px 6px,
              rgba(0, 0, 0, 0.23) 0px 3px 6px;
          }
          h3 {
            grid-row-end: span 3;
            justify-self: center;
          }
        `}
      </style>
    </div>
  );
}
