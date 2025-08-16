import { useNavigate } from "react-router";
import "./LogoGrazzi2D.css";

export default function LogoGrazzi2D() {
  const navigate = useNavigate();
  
  return (
    <div className="logo-container" onClick={() => navigate("/dashboard")}>
      <img src={"/images/logo/logo-grazzi-2d.svg"} alt="Grazzi" />
    </div>
  );
}
