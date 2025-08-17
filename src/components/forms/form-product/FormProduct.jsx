import InputField from "../../input-fields/InputField";
import SelectField from "../../select-fields/SelectField";
import TextAreaField from "../../textarea-fields/TextAreaField";
import "./FormProduct.css";

export default function FormProduct() {

  return (
    <div className="container-form-product">
      <form className="form-product">
        <div className="product">
          <div className="product-image">
            <img
              src="https://res.cloudinary.com/dmzgcmevk/image/upload/v1737573846/p000001_cf3rui.png"
              alt="Vista previa del producto"
              className="product-image-preview"
            />
            <button className="form-button-image button-primary">Subir foto </button>
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
