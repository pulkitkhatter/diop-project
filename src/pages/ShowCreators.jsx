import { useEffect, useState } from "react";
import { supabase } from "../client";
import Card from "../components/Card";
import { Link } from "react-router-dom";

const ShowCreators = () => {
  const [creators, setCreators] = useState([]);

  useEffect(() => {
    fetchCreators();
  }, []);

  const fetchCreators = async () => {
    const { data } = await supabase.from("creators").select();

    setCreators(data);
  };

  return (
    <div>
      <h1>Creatorverse</h1>

      <Link to="/new">
        <button>Add Creator</button>
      </Link>

      {creators.length === 0 ? (
        <p>No Creators Yet</p>
      ) : (
        creators.map((creator) => <Card key={creator.id} creator={creator} />)
      )}
    </div>
  );
};

export default ShowCreators;
