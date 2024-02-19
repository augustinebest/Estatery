import "./card.css";

interface CardProps {
  tag: boolean;
  image: string;
  amount: string;
  like: boolean;
  name: string;
  address: string;
  width: boolean;
}

function Card({ tag, image, amount, like, name, address, width }: CardProps) {
  let classes = "card-frame";
  if (width) {
    classes += " card-fixed-width";
  }
  return (
    <div className={classes}>
      <div>
        <img src={image} alt="house" />
      </div>
      {tag && (
        <div className="popular">
          <div>
            <i className="ri-bard-fill"></i>
            <span>POPULAR</span>
          </div>
        </div>
      )}
      <div className="card-details">
        <div className="amount">
          <p>
            <span>{amount}</span>
            <span>/month</span>
          </p>
          {like && (
            <p>
              <i className="ri-heart-line"></i>
            </p>
          )}
        </div>
        <p className="name">{name}</p>
        <p className="address">{address}</p>
        <hr />
        <div className="card-footer">
          <div>
            <i className="ri-briefcase-line"></i>
            <span>4</span>
          </div>
          <div>
            <i className="ri-lock-unlock-line"></i>
            <span>2</span>
          </div>
          <div>
            <i className="ri-stack-line"></i>
            <span>6x7.5m</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;
