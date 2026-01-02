import { createContext, useReducer, useState } from 'react';

export const PostStore = createContext({
  Posts: [],
  createPost: () => {},
  deletePost: () => {},
  getInitialPosts: () => {},
});

let createPostOnServer = (data) => {
  const response = fetch('http://localhost:5199/posts/create', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  });
};

let deletePostOnServer = (id) => {
  const response = fetch(`http://localhost:5199/posts/${id}`, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
    },
  });
};

let postsReducer = (currentPosts, action) => {
  let newPostItems = currentPosts;
  if (action.type === 'Create') {
    createPostOnServer(action.value);
    //newPostItems = [action.value, ...currentPosts];
  } else if (action.type === 'Delete') {
    deletePostOnServer(action.value);
    newPostItems = currentPosts.filter((x) => x.postID != action.value);
  } else if (action.type === 'Load') {
    newPostItems = action.value;
  }
  return newPostItems;
};
//Wrapper component to abstract all the JS logic from UI components.
let SocialMediaPostProvider = (props) => {
  const defaultPost = [
    { postID: 0, postText: 'This is a new post !!', title: 'Dummy Title' },
  ];
  //const [posts, setPosts] = useState(defaultPost);
  const [posts, postsDispatcher] = useReducer(postsReducer, []);

  const createPostItem = (postId, postData) => {
    var postItem = {
      postData: {
        postText: postData.postText,
        title: postData.postTitle,
      },
    };
    let action = {
      type: 'Create',
      value: postItem,
    };
    postsDispatcher(action);
    // var newPostItem = [...posts, postItem];
    // setPosts(newPostItem);
  };

  const deletePostItem = (postId) => {
    let action = {
      type: 'Delete',
      value: postId,
    };
    postsDispatcher(action);
    // let newPosts = posts.filter((x) => x.PostID != postId);
    // setPosts(newPosts);
  };

  const fetchInitialPosts = (posts) => {
    let action = {
      type: 'Load',
      value: posts,
    };
    postsDispatcher(action);
  };

  return (
    <PostStore.Provider
      value={{
        Posts: posts,
        createPost: createPostItem,
        deletePost: deletePostItem,
        getInitialPosts: fetchInitialPosts,
      }}
    >
      {props.children}
    </PostStore.Provider>
  );
};
export default SocialMediaPostProvider;
