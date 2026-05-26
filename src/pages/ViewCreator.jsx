import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { supabase } from "../client";

const ViewCreator = () => {
  const { id } = useParams();

  const [creator, setCreator] = useState(null);

  useEffect(() => {
    fetchCreator();
  }, []);

  const fetchCreator = async () => {
    const { data } = await supabase
      .from("creators")
      .select()
      .eq("id", id)
      .single();

    setCreator(data);
  };

  if (!creator) {
    return <h1>Loading...</h1>;
  }

  return (
    <div className="view-page">
      <img src={creator.imageURL} alt={creator.name} />

      <h1>{creator.name}</h1>

      <p>{creator.description}</p>

      <div className="view-buttons">
        <a href={creator.url} target="_blank" className="visit-btn">
          Visit Channel
        </a>

        <Link to={`/edit/${creator.id}`} className="details-btn">
          Edit Creator
        </Link>
      </div>
    </div>
  );
};

export default ViewCreator;
