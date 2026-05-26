import { Link } from "react-router-dom";

const Card = ({ creator }) => {
  return (
    <div className="card">
      <img src={creator.imageURL} alt="" width="300" />

      <h2>{creator.name}</h2>

      <p>{creator.description}</p>

      <a href={creator.url} target="_blank">
        Visit Channel
      </a>

      <br />

      <Link to={`/creator/${creator.id}`}>View More</Link>
    </div>
  );
};

export default Card;
