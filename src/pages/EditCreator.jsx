import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { supabase } from "../client";

const EditCreator = () => {
  const { id } = useParams();

  const navigate = useNavigate();

  const [creator, setCreator] = useState({
    name: "",
    url: "",
    description: "",
    imageURL: "",
  });

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

  const handleChange = (event) => {
    const { name, value } = event.target;

    setCreator((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const updateCreator = async (event) => {
    event.preventDefault();

    await supabase.from("creators").update(creator).eq("id", id);

    navigate("/");
  };

  const deleteCreator = async () => {
    await supabase.from("creators").delete().eq("id", id);

    navigate("/");
  };

  return (
    <div className="form-container">
      <h1>Edit Creator</h1>

      <form onSubmit={updateCreator}>
        <input
          type="text"
          name="name"
          value={creator.name}
          onChange={handleChange}
        />

        <input
          type="text"
          name="url"
          value={creator.url}
          onChange={handleChange}
        />

        <textarea
          name="description"
          value={creator.description}
          onChange={handleChange}
        />

        <input
          type="text"
          name="imageURL"
          value={creator.imageURL}
          onChange={handleChange}
        />

        <button type="submit" className="submit-btn">
          Update Creator
        </button>

        <button type="button" onClick={deleteCreator} className="delete-btn">
          Delete Creator
        </button>
      </form>
    </div>
  );
};

export default EditCreator;
