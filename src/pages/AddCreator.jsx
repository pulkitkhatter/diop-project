import { useState } from "react";
import { supabase } from "../client";
import { useNavigate } from "react-router-dom";

const AddCreator = () => {
  const navigate = useNavigate();

  const [creator, setCreator] = useState({
    name: "",
    url: "",
    description: "",
    imageURL: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;

    setCreator((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const addCreator = async (event) => {
    event.preventDefault();

    await supabase.from("creators").insert(creator);

    navigate("/");
  };

  return (
    <div className="form-container">
      <h1>Add Creator</h1>

      <form onSubmit={addCreator}>
        <input
          type="text"
          name="name"
          placeholder="Creator Name"
          onChange={handleChange}
        />

        <input
          type="text"
          name="url"
          placeholder="Channel URL"
          onChange={handleChange}
        />

        <textarea
          name="description"
          placeholder="Description"
          onChange={handleChange}
        />

        <input
          type="text"
          name="imageURL"
          placeholder="Image URL"
          onChange={handleChange}
        />

        <button type="submit" className="submit-btn">
          Add Creator
        </button>
      </form>
    </div>
  );
};

export default AddCreator;
