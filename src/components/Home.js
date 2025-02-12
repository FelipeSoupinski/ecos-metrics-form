import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="home">
      <h2>Application of metrics by Software Ecosystem scenarios</h2>
      <div className="button-container">
        <Link to="/research-info">
          <button className="btn btn-lg btn-primary">
            <span>Let's start</span>
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Home;
