export default function Search({ search, handleSearchChange }) {
  return (
    <div className="container">
      <h2>Episodes Available</h2>
      <input type="text" placeholder="Search Episodes" value={search} onChange={handleSearchChange} />
      <style jsx>{`
            input{
              border-radius: 50px;
              padding: 15px;
              
            }

            .container{
            display: flex;
            justify-content: space-between;
            align-items: center;
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
            
            @media(min-width:768px){
                .container{
                    margin: 0 5rem 1rem 5rem;
                }
            }
            @media (min-width: 1024px) {
                .container {
                  margin: 0 0 1rem 5rem;
                  
                }
              }
            `}</style>
    </div>
  );
}
