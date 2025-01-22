import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="home">
      <h2>Formulário de aplicação de métricas de ECOS</h2>
      <div className="button-container">
        <Link to="/form">
          <button>
            <span>Ver Tutorial</span>
          </button>
        </Link>
        <Link to="/user-info">
          <button>
            <span>Responder Questionário</span>
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Home;
