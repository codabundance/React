import { useContext } from 'react';
import { PostStore } from '../store/PostsProviders';

const Post = ({ content }) => {
  let { deletePost } = useContext(PostStore);

  return (
    <>
      <div className="card post-card" style={{ width: '65rem' }}>
        <div className="card-body">
          <h5 className="card-title">{content.title}</h5>
          <p className="card-text">{content.postText}</p>
          <a
            href="#"
            className="btn btn-primary"
            onClick={() => deletePost(content.postID)}
          >
            Delete Post
          </a>
        </div>
      </div>
    </>
  );
};
export default Post;
