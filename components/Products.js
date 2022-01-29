
export default function Products({title, price, link, image}) {
    return (
        <>
         
      <div className="merch-container">
      <img
        src={image}
        alt="Misc Final White"
        
      />
      <div className="merch-descp">
        <p className="title">{title}</p>
        <p className="price">{price}</p>
        <div className="buy-button">
        <a
          className="buy-button"
          target="_blank"
          data-url={link}
          href={link}
        >
          Buy now
        </a>
        </div>
        
      </div>
    </div>
        <style jsx>{`
    
        
      .merch-container {
        overflow: auto;
        display: flex;
        flex-direction: column;
        justify-content: flex-end;
        align-items: center;
        width: 258.96px;
        background: #ffffff;
        border: 1px solid rgba(0, 0, 0, 0.1);
        box-shadow: -2px 10px 5px rgba(0, 0, 0, 0);
        border-radius: 10px;
        font-family: Libre Franklin, SQ Market, Helvetica, Arial, sans-serif;
      }

      img {
        width: 100%;
      }

      .merch-descp {
        padding: 20px;
      }
      .title {
        font-size: 18px;
        line-height: 20px;
      }

      .price {
        font-size: 18px;
        line-height: 20px;
        font-weight: 600;
      }
      .buy-button {
        display: inline-block;
        font-size: 18px;
        line-height: 48px;
        height: 48px;
        min-width: 212px;
        background-color: #006aff;
        
        text-align: center;
        box-shadow: 0 0 0 1px rgba(0, 0, 0, 0.1) inset;
        border-radius: 50px;
      }
      .buy-button:hover {
        background-color: white;
      }

    `}</style>
        </>
    )
}