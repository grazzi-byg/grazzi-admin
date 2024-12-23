import "./LogoGrazzi2D.css";

export default function LogoGrazzi2D() {
  return (
    <div className="logo-container" onClick={() => window.location.href = "/"}>
      <img src={"/images/logo/logo-grazzi-2d.svg"} alt="Grazzi" />
    </div>
  );
}
