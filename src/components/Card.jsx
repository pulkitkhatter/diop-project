import { Link } from "react-router-dom";

const Card = ({ creator }) => {
  return (
    <div className="card">
      <img src={creator.imageURL} alt={creator.name} />

      <div className="card-content">
        <h2>{creator.name}</h2>

        <p>{creator.description}</p>

        <div className="card-buttons">
          <a href={creator.url} target="_blank" className="visit-btn">
            Visit
          </a>

          <Link to={`/creator/${creator.id}`} className="details-btn">
            Details
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Card;
