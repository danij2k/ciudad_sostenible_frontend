import { Post } from "./Post";

export const PostList = ({ posts }) => {
  return posts.length > 0 ? (
    <ul className="postlist">
      {posts.map((post) => (
        <li key={post.id}>
          <Post post={post} />
        </li>
      ))}
    </ul>
  ) : (
    <p>There are no posts yet...</p>
  );
};
