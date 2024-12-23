import "./Products.css";
import { useState } from "react";
import { useNavigate } from "react-router";

export default function Products() {
  let navigate = useNavigate();

  const [availability, setAvailability] = useState({
    1: true,
    2: false,
    3: true,
    4: false,
    5: true,
  });

  const handleToggle = (id) => {
    setAvailability((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  return (
    <div className="products-container">
      <button
        className="products-create-button"
        onClick={() => navigate("/products/create")}
      >
        Crear producto
      </button>
      <table>
        <thead>
          <tr>
            <th>Código</th>
            <th>Producto</th>
            <th>Stock</th>
            <th>Precio unitario</th>
            <th>Disponible</th>
          </tr>
        </thead>
        <tbody>
          {[
            { id: 1, name: "Producto 1", stock: 10, price: 20000 },
            { id: 2, name: "Producto 2", stock: 5, price: 20000 },
            { id: 3, name: "Producto 3", stock: 20, price: 20000 },
            { id: 4, name: "Producto 4", stock: 15, price: 20000 },
            { id: 5, name: "Producto 5", stock: 25, price: 20000 },
          ].map((product) => (
            <tr key={product.id}>
              <td>{product.id}</td>
              <td>{product.name}</td>
              <td>{product.stock}</td>
              <td>{product.price}</td>
              <td>
                <button
                  className={`toggle-button ${
                    availability[product.id] ? "active" : ""
                  }`}
                  onClick={() => handleToggle(product.id)}
                >
                  {availability[product.id] ? "Activo" : "Inactivo"}
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
