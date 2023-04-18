import { useContext, useState } from "react";
import { AuthContext } from "../context/AuthContext";
import { sendPostService } from "../services";

export const NewPost = ({ addPost }) => {
  const { token } = useContext(AuthContext);
  const [image, setImage] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleForm = async (e) => {
    e.preventDefault();

    try {
      setLoading(true);
      const data = new FormData(e.target);

      const post = await sendPostService({ data, token });

      addPost(post);

      e.target.reset();
      setImage(null);
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };
  return (
    <>
      <h1>Add new Post</h1>
      <form className="new-post" onSubmit={handleForm}>
        <fieldset>
          <label htmlFor="title">Title</label>
          <input type="text" name="title" id="title" required />
        </fieldset>
        <fieldset>
          <label htmlFor="barrio">Barrio</label>
          <input type="text" name="barrio" id="barrio" required />
        </fieldset>
        <fieldset>
          <label htmlFor="text">Text</label>
          <input type="text" name="text" id="text" required />
        </fieldset>
        <fieldset>
          <label htmlFor="photo">Image</label>
          <input
            type="file"
            name="photo"
            id="photo"
            accept={"photo/*"}
            onChange={(e) => setImage(e.target.files[0])}
          />
          {image ? (
            <figure>
              <img
                src={URL.createObjectURL(image)}
                style={{ width: "500px" }}
                alt="Preview"
              />
            </figure>
          ) : null}
        </fieldset>
        <button>Send post</button>
        {error ? <p>{error}</p> : null}
        {loading ? <p>posting...</p> : null}
      </form>
    </>
  );
};
