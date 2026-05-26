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

  if (!creator) return <p>Loading...</p>;

  return (
    <div>
      <img src={creator.imageURL} width="400" />

      <h1>{creator.name}</h1>

      <p>{creator.description}</p>

      <a href={creator.url} target="_blank">
        Visit Channel
      </a>

      <br />

      <Link to={`/edit/${creator.id}`}>
        <button>Edit</button>
      </Link>
    </div>
  );
};

export default ViewCreator;
