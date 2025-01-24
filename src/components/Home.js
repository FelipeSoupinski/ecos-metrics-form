import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="home">
      <h2>Application of metrics by Software Ecosystem scenarios.</h2>
      <div className="button-container">
        <Link to="/form">
          <button>
            <span>View tutorial</span>
          </button>
        </Link>
        <Link to="/user-info">
          <button>
            <span>Answer questionnaire</span>
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Home;
