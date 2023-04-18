import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";

export const Auth = () => {
  const { user, logout } = useContext(AuthContext);
  return user ? (
    <div>
      <p>Bienvenido {user.name}</p>
      <button onClick={() => logout()}>Log Out</button>
      <ul className="navigator">
        <li>
          <Link to={"/"}>Home</Link>
        </li>
        <li>
          <Link to={"/post"}>New Post</Link>
        </li>
      </ul>{" "}
    </div>
  ) : (
    <ul className="navigator">
      <li>
        <Link to={"/"}>Home</Link>
      </li>
      <li>
        <Link to={"/login"}>Login</Link>
      </li>
    </ul>
  );
};
