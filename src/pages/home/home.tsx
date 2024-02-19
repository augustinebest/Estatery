import Hero from "../../components/hero/hero";
import "./home.css";
import Apartment1 from "../../assets/image/apartment1.jpg";
import Apartment4 from "../../assets/image/apartment4.jpg";
import Apartment5 from "../../assets/image/apartment5.jpg";
import Apartment6 from "../../assets/image/apartment6.jpg";
import Apartment7 from "../../assets/image/apartment7.jpg";
import Apartment8 from "../../assets/image/apartment8.jpg";
import Apartment9 from "../../assets/image/apartment9.jpg";
import Image1 from "../../assets/image/image1.png";
import Stats from "../../components/stats/stats";
import Card from "../../components/card/card";

const apartments = [
  {
    tag: true,
    image: Apartment4,
    amount: "$2,095",
    like: true,
    name: "Palm Harbor",
    address: "2699 Green Valley, Highland Lake, FL",
    width: false,
  },
  {
    tag: true,
    image: Apartment5,
    amount: "$2,700",
    like: true,
    name: "Beverly Springfield",
    address: "2821 Lake Sevilla, Palm Harbor, TX",
    width: false,
  },
  {
    tag: true,
    image: Apartment6,
    amount: "$4,550",
    like: true,
    name: "Faulkner Ave",
    address: "909 Woodland St. Michigan",
    width: false,
  },
  {
    tag: false,
    image: Apartment7,
    amount: "$2,400",
    like: true,
    name: "St. Crystal",
    address: "210 US Highway, Highland Lake, FL",
    width: false,
  },
  {
    tag: true,
    image: Apartment8,
    amount: "$1,500",
    like: true,
    name: "Cove Red",
    address: "243 Curlew Road, Palm Harbor, TX",
    width: false,
  },
  {
    tag: false,
    image: Apartment9,
    amount: "$1,600",
    like: true,
    name: "Tarpon Bay",
    address: "103 Lake Shores, Michigan, IN",
    width: false,
  },
];

function home() {
  return (
    <div>
      <Hero />
      <div className="virtual-frame">
        <div>
          <div className="asset">
            <div className="items item1">
              <div className="icon">
                <div>
                  <i className="ri-youtube-line"></i>
                </div>
              </div>
              <div>
                <p>Virtual home tour</p>
                <p>We provide you with virtual tour</p>
              </div>
            </div>
            <img src={Apartment1} alt="apartment" />
            <div className="items item2">
              <div className="circle">
                <i className="ri-home-smile-2-line"></i>
              </div>
              <p>Find the best deal</p>
              <p>Browse thousands of properties</p>
            </div>
          </div>
          <div className="virtual-notes">
            <div>
              <div className="tab">
                <button>For tenants</button>
                <div>For landlords</div>
              </div>
              <div className="head">
                We make it easy for tenants and landlords
              </div>
              <p>
                Whether it's selling your current home, getting financing, or
                buying a new home, we make it easy and efficient. the best part?
                you'll save a bunch of money and time with out services
              </p>
              <button className="virtual-button">
                <span>See more</span> <i className="ri-arrow-right-s-line"></i>
              </button>
            </div>
          </div>
        </div>
      </div>

      <section className="s3">
        <div className="section3">
          <div>
            <div>
              <p className="head">The new way to find your new home</p>
              <p className="desc">
                Find your dream place to live in with more than 10K+ properties
                listed.
              </p>
              <div className="data">
                <Stats />
                <Stats />
                <Stats />
              </div>
            </div>
            <div className="image-area">
              <img src={Image1} alt="imagebg" />
            </div>
          </div>
        </div>
      </section>

      <section className="s4">
        <div className="section4">
          <div className="description">
            <div>
              <p className="head">Based on your location</p>
              <p className="desc">
                Some of our picked properies near your location.
              </p>
            </div>
            <button className="browse-btn">Browse more properties</button>
          </div>
          <div className="s-card">
            {apartments.map((item, i) => (
              <div className="card-item">
                <Card {...item} />
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

export default home;
