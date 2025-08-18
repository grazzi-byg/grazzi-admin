import UploadImage from "../../upload-images/UploadImage";
import "./FormProduct.css";
import { useState } from "react";
import InputField from "../../input-fields/InputField"; 
import SelectField from "../../select-fields/SelectField"; 
import TextAreaField from "../../textarea-fields/TextAreaField";

export default function FormProduct() {
  const [imageUrl, setImageUrl] = useState(
    "https://res.cloudinary.com/dmzgcmevk/image/upload/v1755458248/upload_ve19hz.png"
  );
  const [publicId, setPublicId] = useState(null);

  const handleUploaded = ({ url, public_id }) => {
    setImageUrl(url);
    setPublicId(public_id);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
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
              type="text"
              placeholder="Digite el nombre del producto"
            />
            <SelectField
              label="Categoria"
              options={["Anillos", "Cadenas", "Brazaletes", "Aretes"]}
              placeholder="Seleccione una categoría"
            />
            <SelectField
              label="Material"
              options={["CoverGold", "Plata"]}
              placeholder="Seleccione un material"
            />
            <InputField
              label="Cantidad disponible"
              type="number"
              placeholder="Digite una cantidad"
            />
            <InputField
              label="Precio"
              type="number"
              placeholder="Digite un precio"
            />
            <TextAreaField
              label="Descripción"
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
