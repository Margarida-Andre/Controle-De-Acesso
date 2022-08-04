import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../../services/api";
import PermissionComponent from "../PermissionComponent";

// import { Container } from './styles';

interface ProductData {
  id: string;
  name: string;
  description: string;
}
const List: React.FC = () => {
  const [products, setProducts] = useState<ProductData[]>([] as ProductData[]);
  const Navigate = useNavigate();

  useState(() => {
    api.get("/products").then((response) => setProducts(response.data));
  });

  return (
    <>
      <h1>Listagem</h1>
      <div>
        {products.map((product) => (
          <div key={product.id}>
            <span>ID: {product.id}</span>
            <br />
            <span>Nome: {product.name}</span>
            <br />
            <span>Description: {product.description}</span>
            <br />
            <PermissionComponent role="ROLE_ADMIN">
              <button onClick={() => Navigate("/product")}>
                Cadastrar Produto
              </button>
            </PermissionComponent>
          </div>
        ))}
      </div>
    </>
  );
};

export default List;
