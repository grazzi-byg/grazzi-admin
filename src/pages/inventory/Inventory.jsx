import "./Inventory.css";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router";

export default function Inventory() {
  const navigate = useNavigate();

  const [products, setProducts] = useState([]);

  useEffect(() => {
    async function fetchProducts() {
      try {
        const response = await fetch(
          `${import.meta.env.VITE_API_URL}/api/v1/products`
        );
        const data = await response.json();
        setProducts(Array.isArray(data) ? data : []);
      } catch (error) {
        console.error("Error fetching products", error);
      }
    }

    fetchProducts();
  }, []);

  return (
    <div className="inventory-container">
      <button
        className="inventory-create-button"
        onClick={() => navigate("/inventory/create")}
      >
        Crear producto
      </button>

      <div className="inventory-list">
        {products.map((product) => (
          <div className="inventory-item" key={product.id}>
            {product.image && (
              <img
                src={product.image}
                alt={product.name}
                className="inventory-item-image"
              />
            )}
            <div className="inventory-item-info">
              <h3 className="inventory-item-title">{product.name}</h3>
              {product.category && (
                <p>
                  <span className="inventory-item-label">Categoría:</span>{" "}
                  {product.category}
                </p>
              )}
              {product.material && (
                <p>
                  <span className="inventory-item-label">Material:</span>{" "}
                  {product.material}
                </p>
              )}
              {product.price && (
                <p>
                  <span className="inventory-item-label">Precio:</span>{" "}
                  {product.price}
                </p>
              )}
              {product.description && (
                <p>
                  <span className="inventory-item-label">Descripción:</span>{" "}
                  {product.description}
                </p>
              )}
            </div>
            <div className="inventory-item-actions">
              <button className="inventory-edit-button">Editar</button>
              <button className="inventory-delete-button">Eliminar</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
