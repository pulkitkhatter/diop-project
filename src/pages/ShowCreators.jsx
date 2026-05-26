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

    setCreators(data || []);
  };

  return (
    <div className="container">
      <div className="header">
        <div>
          <h1 className="title">Creatorverse</h1>

          <p className="subtitle">Discover amazing content creators</p>
        </div>

        <Link to="/new">
          <button className="add-btn">Add Creator</button>
        </Link>
      </div>

      {creators.length === 0 ? (
        <div className="empty-state">
          <h2>No Creators Yet</h2>
        </div>
      ) : (
        <div className="creator-grid">
          {creators.map((creator) => (
            <Card key={creator.id} creator={creator} />
          ))}
        </div>
      )}
    </div>
  );
};

export default ShowCreators;
