import { createContext, useReducer, useState } from 'react';

export const PostStore = createContext({
  Posts: [],
  createPost: () => {},
  deletePost: () => {},
});

let postsReducer = (currentPosts, action) => {
  let newPostItems = currentPosts;
  if (action.type === 'Create') {
    newPostItems = [action.value, ...currentPosts];
  } else if (action.type === 'Delete') {
    newPostItems = currentPosts.filter((x) => x.PostID != action.value);
  }
  return newPostItems;
};

let SocialMediaPostProvider = (props) => {
  const defaultPost = [
    { PostID: 0, PostText: 'This is a new post !!', Title: 'Dummy Title' },
  ];
  //const [posts, setPosts] = useState(defaultPost);
  const [posts, postsDispatcher] = useReducer(postsReducer, defaultPost);

  const createPostItem = (postId, postData) => {
    var postItem = {
      PostID: postId,
      PostText: postData.postText,
      Title: postData.postTitle,
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

  return (
    <PostStore.Provider
      value={{
        Posts: posts,
        createPost: createPostItem,
        deletePost: deletePostItem,
      }}
    >
      {props.children}
    </PostStore.Provider>
  );
};
export default SocialMediaPostProvider;
