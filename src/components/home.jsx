import "./home.css";

import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="home-page">
      <h1>Welcome To The Flower Shop</h1>
      <h3>Check out our amazing Selection</h3>
      <hr />

      <Link className="btn btn-lg btn-primary" to="/catalog">
        View Catalog <i class="fa fa-chevron-circle-right" aria-hidden="true"></i>
      </Link>
      <div className="main_image">
        <img src="/images/field.jpeg" alt="Flower Field"></img>
      </div>

      <div className="sec_image">
        <img src="/images/quote.jpeg" alt="quote" />
      </div>
    </div>
  );
};

export default Home;
