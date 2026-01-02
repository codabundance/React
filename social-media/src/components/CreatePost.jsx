import { useContext, useRef, useState } from 'react';
import { PostStore } from '../store/PostsProviders';
import { useId } from 'react';
import { Form, redirect, useNavigate } from 'react-router-dom';

const CreatePost = () => {
  //const { createPost } = useContext(PostStore);
  // let postContent = useRef();
  // let postTitle = useRef();
  // let postId = useId();

  // let handleAddClick = (event) => {
  //   event.preventDefault();
  //   let postData = {
  //     postText: postContent.current.value,
  //     postTitle: postTitle.current.value,
  //   };
  //   postContent.current.value = '';
  //   postTitle.current.value = '';
  //   createPost(postId, postData);
  // };

  return (
    <>
      <Form method="POST" className="create-post">
        <div className="mb-3">
          <label htmlFor="title" className="form-label">
            Please Add Title:
          </label>
          <input
            type="text"
            className="form-control"
            id="title"
            name="title"
            aria-describedby="emailHelp"
            placeholder="What's new.."
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
            name="postText"
            placeholder="Tell us more about it..."
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
        <button className="btn btn-primary" type="submit">
          Post
        </button>
      </Form>
    </>
  );
};
export async function handlePostData(data) {
  const formData = await data.request.formData();
  const postData = Object.fromEntries(formData);
  const PostData = {
    postData: postData,
  };
  fetch('http://localhost:5199/posts/create', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(PostData),
  }).then((post) => {
    console.log(post);
  });

  return redirect('/');
}
export default CreatePost;
