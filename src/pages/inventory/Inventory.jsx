import "./Inventory.css";
import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router";
import FormProduct from "../../components/forms/form-product/FormProduct";
import Modal from "../../components/modal/Modal";

export default function Inventory() {
  const navigate = useNavigate();

  const [products, setProducts] = useState([]);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    async function fetchProducts() {
      try {
        const response = await fetch(
          `${import.meta.env.VITE_API_URL}/products`
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
        className="button-primary"
        onClick={() => setShowModal(true)}
      >
        Crear producto
      </button>

      <div className="inventory-list">
        {products.map((product) => (
          <div className="inventory-item" key={product.productId}>
            {product.productImage && (
              <img
                src={product.productImage}
                alt={product.productName}
                className="inventory-item-image"
              />
            )}
            <div className="inventory-item-info">
              <span className="inventory-item-title">{product.productName}</span>
              <div className="inventory-item-info-details">
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
                    {`$ ${product.price} COP`}
                  </p>
                )}
                {product.description && (
                  <p>
                    <span className="inventory-item-label">Descripción:</span>{" "}
                    {product.description}
                  </p>
                )}
              </div>
            </div>
            <div className="inventory-item-actions">
              <Link className="link">Editar</Link>
              <Link className="link">Eliminar</Link>
            </div>
          </div>
        ))}
      </div>
      {showModal && (
        <Modal onClose={() => setShowModal(false)}>
          <FormProduct />
        </Modal>
      )}
    </div>
  );
}
