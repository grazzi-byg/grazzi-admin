/* eslint-disable react/prop-types */
import { useRef, useState } from "react";

const ACCEPTED_TYPES = ["image/jpeg", "image/png", "image/jpg"];

export default function UploadImage({
  buttonLabel = "Subir foto",
  uploadingLabel = "Subiendo...",
  maxMb = 10,
  maxSizePx = 1024,
  onUploaded,
}) {
  const fileRef = useRef(null);
  const [uploading, setUploading] = useState(false);
  const [error, setError] = useState("");

  const cloudName = import.meta.env.VITE_CLOUDINARY_CLOUD_NAME;
  const uploadPreset = import.meta.env.VITE_CLOUDINARY_UPLOAD_PRESET;
  const folder = import.meta.env.VITE_CLOUDINARY_FOLDER || undefined;

  const trigger = (e) => {
    e.preventDefault();
    fileRef.current?.click();
  };

  const fileToImage = (file) =>
    new Promise((resolve, reject) => {
      const fr = new FileReader();
      fr.onload = () => {
        const img = new Image();
        img.onload = () => resolve(img);
        img.onerror = reject;
        img.src = fr.result;
      };
      fr.onerror = reject;
      fr.readAsDataURL(file);
    });

  const resizeIfNeeded = async (file) => {
    const img = await fileToImage(file);
    const { width, height } = img;

    if (width <= maxSizePx && height <= maxSizePx) {
      return { blob: file, dataUrl: img.src };
    }

    const scale = Math.min(maxSizePx / width, maxSizePx / height, 1);
    const targetW = Math.round(width * scale);
    const targetH = Math.round(height * scale);

    const canvas = document.createElement("canvas");
    canvas.width = targetW;
    canvas.height = targetH;
    const ctx = canvas.getContext("2d");
    ctx.drawImage(img, 0, 0, targetW, targetH);

    const isPng = file.type === "image/png";
    const mime = isPng ? "image/png" : "image/jpeg";
    const dataUrl = canvas.toDataURL(mime, 0.9);
    const blob = await (await fetch(dataUrl)).blob();
    return { blob, dataUrl };
  };

  const handleSelect = async (e) => {
    const file = e.target.files?.[0];
    if (!file) return;

    setError("");
    setUploading(true);

    try {
      if (!cloudName || !uploadPreset) {
        throw new Error(
          "Falla al cargar la imagen"
        );
      }

      if (!ACCEPTED_TYPES.includes(file.type)) {
        throw new Error("Formato no permitido. Solo JPG/JPEG/PNG.");
      }
      if (file.size > maxMb * 1024 * 1024) {
        throw new Error(`La imagen supera ${maxMb} MB.`);
      }

      const { blob, dataUrl } = await resizeIfNeeded(file);
      if (blob.size > maxMb * 1024 * 1024) {
        throw new Error(
          `La imagen resultante aún supera ${maxMb} MB. Prueba con una imagen más liviana.`
        );
      }

      const form = new FormData();
      const fileName =
        file.name?.replace(/\s+/g, "_") ||
        `upload.${blob.type === "image/png" ? "png" : "jpg"}`;
      const finalFile = new File([blob], fileName, { type: blob.type });

      form.append("file", finalFile);
      form.append("upload_preset", uploadPreset);
      if (folder) form.append("folder", folder);

      const endpoint = `https://api.cloudinary.com/v1_1/${cloudName}/image/upload`;
      const resp = await fetch(endpoint, { method: "POST", body: form });
      const data = await resp.json();

      if (!resp.ok) {
        throw new Error(data?.error?.message || "Error subiendo la imagen.");
      }

      onUploaded?.({ url: data.secure_url, public_id: data.public_id, raw: data });
    } catch (err) {
      console.error(err);
      setError(err.message || "Error subiendo la imagen.");
    } finally {
      setUploading(false);
      if (fileRef.current) fileRef.current.value = "";
    }
  };

  return (
    <div className="upload-image">
      <button className="form-button-image button-primary" onClick={trigger}>
        {uploading ? uploadingLabel : buttonLabel}
      </button>

      <input
        ref={fileRef}
        type="file"
        accept="image/jpeg,image/png"
        style={{ display: "none" }}
        onChange={handleSelect}
      />

      {error && (
        <p className="error-text" style={{ color: "crimson", marginTop: 8 }}>
          {error}
        </p>
      )}
    </div>
  );
}
