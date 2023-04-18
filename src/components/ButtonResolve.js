import { useContext } from "react";
import { solvePostService } from "../services";
import { AuthContext } from "../context/AuthContext";

export const ButtonResolve = ({ post }) => {
  const { token } = useContext(AuthContext);

  const handleClick = () => {
    solvePostService(post, { token });
  };
  return (
    <div>
      <button onClick={handleClick}>Click to resolve</button>
    </div>
  );
};
