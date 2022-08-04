import { useCallback, useState } from "react";

import api from "../../services/api";
//import "./styles.css";

const Product: React.FC = () => {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");

  const hundleSubmit = useCallback(
    async (event: { preventDefault: () => void }) => {
      event.preventDefault();
      const response = await api.post("/products", {
        name,
        description,
      });
      console.log(response);
    },
    [name, description]
  );

  return (
    <form className="container" onSubmit={hundleSubmit}>
      <div className="form-group">
        <label htmlFor="">Name</label>
        <input
          type="text"
          onChange={(event) => setName(event.target.value)}
        ></input>
      </div>

      <div className="form-group">
        <label htmlFor="">Description</label>
        <input
          type="description"
          onChange={(event) => setDescription(event.target.value)}
        ></input>
      </div>

      <div className="form-group">
        <button type="submit">Cadastrar</button>
      </div>
    </form>
  );
};

export default Product;
