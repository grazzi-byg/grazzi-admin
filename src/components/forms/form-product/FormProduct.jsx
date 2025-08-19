import UploadImage from "../../upload-images/UploadImage";
import "./FormProduct.css";
import { useState } from "react";
import InputField from "../../input-fields/InputField";
import SelectField from "../../select-fields/SelectField";
import TextAreaField from "../../textarea-fields/TextAreaField";
import { useNavigate } from "react-router";

export default function FormProduct() {
  const [imageUrl, setImageUrl] = useState(
    "https://res.cloudinary.com/dmzgcmevk/image/upload/v1755458248/upload_ve19hz.png"
  );
  const [publicId, setPublicId] = useState(null);
  const navigate = useNavigate();

  const handleUploaded = ({ url, public_id }) => {
    setImageUrl(url);
    setPublicId(public_id);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);
    const productData = {
      productName: formData.get("productName"),
      category: formData.get("category").toLowerCase(),
      material: formData.get("material"),
      stock: Number(formData.get("stock")),
      price: Number(formData.get("price")),
      description: formData.get("description"),
      productImage: imageUrl,
      publicId,
    };

    try {
      const response = await fetch(`${import.meta.env.VITE_API_URL}/products`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(productData),
      });

      if (!response.ok) {
        throw new Error("Error al guardar el producto");
      }

      setImageUrl(
        "https://res.cloudinary.com/dmzgcmevk/image/upload/v1755458248/upload_ve19hz.png"
      );
      setPublicId(null);

      alert("Producto guardado exitosamente");
      navigate("/inventory");

    } catch (error) {
      alert(`Error: ${error.message}`);
    }
  };

  return (
    <div className="container-form-product">
      <form className="form-product" onSubmit={handleSubmit}>
        <div className="product">
          <div className="product-image">
            <img
              src={imageUrl}
              alt="Vista previa del producto"
              className="product-image-preview"
            />

            <UploadImage
              onUploaded={handleUploaded}
              maxSizePx={1024}   
              buttonLabel="Subir foto"
              uploadingLabel="Subiendo..."
            />
          </div>

          <div className="product-details">
            <InputField
              label="Nombre del producto"
              name="productName"
              type="text"
              placeholder="Digite el nombre del producto"
            />
            <SelectField
              label="Categoria"
              name="category"
              options={["Anillos", "Cadenas", "Brazaletes", "Aretes"]}
              placeholder="Seleccione una categoría"
            />
            <SelectField
              label="Material"
              name="material"
              options={["CoverGold", "Plata"]}
              placeholder="Seleccione un material"
            />
            <InputField
              label="Cantidad disponible"
              name="stock"
              type="number"
              placeholder="Digite una cantidad"
            />
            <InputField
              label="Precio"
              name="price"
              type="number"
              placeholder="Digite un precio"
            />
            <TextAreaField
              label="Descripción"
              name="description"
              placeholder="Escriba una descripción breve"
            />
          </div>
        </div>
        <button className="form-button button-primary" type="submit">
          Guardar
        </button>
      </form>
    </div>
  );
}
