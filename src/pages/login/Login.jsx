import { useNavigate } from "react-router";
import "./Login.css";
import { useRef } from "react";

export default function Login() {
  const emailRef = useRef(null);
  const passwordRef = useRef(null);
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    const email = emailRef.current.value;
    const password = passwordRef.current.value;

    try {
      const res = await fetch(`${import.meta.env.VITE_API_URL}/auth/login`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }), 
      });

      if (!res.ok) {
        const errorData = await res.json();
        throw new Error(errorData.error);
      }

      const { token } = await res.json();

      localStorage.setItem("authToken", token);

      navigate("/dashboard");
    } catch (error) {
      console.error("Error: " + error.message);
      alert("Error al iniciar sesión: " + error.message);

      emailRef.current.value = "";
      passwordRef.current.value = "";
    }
  };

  return (
    <div className="login-container">
      <form className="login-form" onSubmit={handleLogin}>
        <h2>Login</h2>
        <label>
          Correo
          <input ref={emailRef} type="text" placeholder="Ingresa tu correo" />
        </label>
        <label>
          Contraseña
          <input ref={passwordRef} type="password" placeholder="Ingresa tu contraseña" />
        </label>
        <button type="submit">Login</button>
      </form>
    </div>
  );
}
