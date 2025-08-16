import "./FormProduct.css";

export default function FormProduct() {
  return (
    <div className="container-form-product">
      <form>
        <input type="text" placeholder="Nombre del producto" />
        <input type="text" placeholder="Categoría" />
        <input type="number" placeholder="Precio" />
        <textarea placeholder="Descripción"></textarea>
        <button type="submit">Guardar</button>
      </form>
    </div>
  );
}