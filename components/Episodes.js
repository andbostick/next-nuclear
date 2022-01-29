import Image from "next/image";

export default function Episodes({
  episodeTitle,
  rating,
  uploadDate,
  description,
  author
}) {
  console.log({ description });
  return (
    <div className="episode-card">
      <div className="episode-title">
        <h2>{episodeTitle}</h2>
        <p>_________________________</p>

        {description}
      </div>

      <div className="episode-details">
        <p>Author: {author}</p>
        <p>Episode Rating: {rating}</p>
        <p>Publish Date: {uploadDate}</p>
      </div>

      <style jsx>
        {`
          .episode-card {
            display: grid;
            grid-template-columns: 1fr 1fr 1fr;
            font-family: sans-serif;
            color: white;
            border-radius: 5px;
            padding: 10px;
            margin: 1rem 1rem 1rem 1rem;
            background-color: rgba(0, 0, 0, 0.5);
            box-shadow: rgba(0, 0, 0, 0.16) 0px 3px 6px,
              rgba(0, 0, 0, 0.23) 0px 3px 6px;
            line-height: 1.4;
          }

          .episode-title {
            grid-column-end: span 2;

            padding: 1rem;
          }

          .episode-details {
            padding: 1rem;
            grid-column-end: span 1;
            font-size: 10px;
            display: flex;
            align-items: flex-end;
            flex-direction: column;
            font-size: .7rem;
            font-weight: 300;
            gap: 5px;
          }

          h2 {
            letter-spacing: 0.05em;
            line-height: 1;
            margin: 0;
            font-size: 1.7rem;
          }

          @media (min-width: 768px) {
            .episode-card {
              margin: 1rem 5rem 1rem 5rem;
            }
            @media (min-width: 1024px) {
              .episode-card {
                margin: 0 0 1rem 5rem;
              }
            }
          }
        `}
      </style>
    </div>
  );
}
