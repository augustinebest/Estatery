import Card from "../card/card";
import "./hero.css";
import Apartment2 from "../../assets/image/apartment2.jpg";
import Apartment10 from "../../assets/image/apartment10.jpg";

const card1 = {
  tag: false,
  image: Apartment2,
  amount: "$2,700",
  like: false,
  name: "Beverly Springfield",
  address: "2821 Lake Sevilla, Palm Harbor, TX",
  width: true,
};

const card2 = {
  tag: false,
  image: Apartment10,
  amount: "$1,600",
  like: false,
  name: "Tarpon Bay",
  address: "Palm Harbor, TX",
  width: true,
};

function Hero() {
  return (
    <section className="hero-frame">
      <main>
        <div>
          <div>
            <p className="text1">Buy, rent, or sell <br/> your property <br/> easily</p>
            <p className="text2">
              A great platform to buy, sell, or even rent your properties
              without any commisions.
            </p>
            <div className="metrics">
              <div>
                <p>50K+</p>
                <p>renters</p>
              </div>
              <div>
                <p>10K+</p>
                <p>properties</p>
              </div>
            </div>
          </div>
        </div>
        <div className="column2">
          <div>
            <Card {...card1} />
          </div>
        </div>
      </main>
      <div className="main">
        <div>
          <div className="switch">
            <div>Rent</div>
            <div>Buy</div>
            <div>Sell</div>
          </div>
          <div className="search-area">
            <div className="search">
              <div className="bord">
                <input type="text" placeholder="Location" />
                <p>Barcelona, Spain</p>
              </div>
              <div className="bord">
                <input type="text" placeholder="When" />
                <p>Select Move-in Date</p>
              </div>
              <div className="bord">
                <button>Browse Properties</button>
              </div>
            </div>
            <div className="card2">
              <Card {...card2} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
