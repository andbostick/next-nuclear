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
      <div className="episode-details">
      <p>Episode Rating:{rating}</p>
      <p>Publish Date:{uploadDate}</p>
      </div>
      

      <style jsx>
        {`
          .episode-card {
            display: grid;
            grid-template-columns: 1fr 1fr 1fr;
            
            font-family: "Lucida Console", "Courier New", monospace;
            color: white;
            border-radius: 5px;
            padding: 10px;
            margin: 1rem 1rem 1rem 1rem;
            background-color: rgba(0, 0, 0, 0.5);
            box-shadow: rgba(0, 0, 0, 0.16) 0px 3px 6px,
              rgba(0, 0, 0, 0.23) 0px 3px 6px;
          }
          .episode-image {
            grid-row-end: span 2;
            justify-self: center;
            background: red;
          }
          .episode-title{
              grid-column-end: span 2;
          }
          
          .episode-details{
            grid-column-end: span 2;
            font-size: 10px;
            display: flex;
            margin-top: 10px;
          }

          h2 {
            letter-spacing: .05em;
          }

          @media(min-width:768px){
            .episode-card {
              margin: 1rem 5rem 1rem 5rem;
            }
          }
        `}
      </style>
    </div>
  );
}
