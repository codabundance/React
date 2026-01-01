import { useContext, useRef, useState } from 'react';
import { PostStore } from '../store/PostsProviders';
import { useId } from 'react';

const CreatePost = () => {
  const { createPost } = useContext(PostStore);
  let postContent = useRef();
  let postTitle = useRef();
  let postId = useId();

  let handleAddClick = (event) => {
    //event.preventDefault();
    let postData = {
      postText: postContent.current.value,
      postTitle: postTitle.current.value,
    };
    postContent.current.value = '';
    postTitle.current.value = '';
    createPost(postId, postData);
  };

  return (
    <>
      <form className="create-post">
        <div className="mb-3">
          <label htmlFor="title" className="form-label">
            Please Add Title:
          </label>
          <input
            type="text"
            className="form-control"
            id="title"
            aria-describedby="emailHelp"
            placeholder="What's new.."
            ref={postTitle}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="body" className="form-label">
            Please add the post content:
          </label>
          <textarea
            type="text"
            rows="4"
            className="form-control"
            id="exampleInputPassword1"
            placeholder="Tell us more about it..."
            ref={postContent}
          />
        </div>
        {/* <div className="mb-3 form-check">
          <input
            type="checkbox"
            className="form-check-input"
            id="exampleCheck1"
          />
          <label className="form-check-label" htmlFor="exampleCheck1">
            Check me out
          </label>
        </div> */}
        <button className="btn btn-primary" onClick={handleAddClick}>
          Post
        </button>
      </form>
    </>
  );
};
export default CreatePost;
