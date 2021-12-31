export default function Sidebar({ episodeData }) {
  console.log(episodeData);
  return (
    <div>
      <div className="side-container">
        <h2>Ratings at a Glance</h2>
        _______________
      
        {episodeData.episodes.map((epis) => {
          return (
            <div className="side-content">
              <p>{epis.fields.episodeTitle}</p>
              <p>({epis.fields.rating})</p>
            </div>
          );
        })}
      </div>

      <style jsx>
        {`
          .side-container {
            background-color: rgba(0, 0, 0, 0.5);
            box-shadow: rgba(0, 0, 0, 0.16) 0px 3px 6px,
              rgba(0, 0, 0, 0.23) 0px 3px 6px;

            font-family: sans-serif;
            color: white;
            border-radius: 5px;
            padding: 20px;
          }

          .side-content {
            display: flex;
            gap: 15px;
          }

          @media (min-width: 1024px) {
            .side-container {
              margin-left: 0;
            }
          }
        `}
      </style>
    </div>
  );
}
