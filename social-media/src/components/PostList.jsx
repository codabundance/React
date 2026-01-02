import { useContext, useEffect, useState } from 'react';
import Post from './Post';
import { PostStore } from '../store/PostsProviders';
import WelcomeMessage from './WelcomeMessage';
import LoadingSpinner from './LoadingSpinner';
import { useLoaderData } from 'react-router-dom';

const PostList = () => {
  //let { Posts, getInitialPosts } = useContext(PostStore);
  //let [fetching, setFetching] = useState(false);
  const Posts = useLoaderData();
  //   useEffect(() => {
  //     setFetching(true);

  //     // const controller = new AbortController();
  //     // const signal = controller.signal;

  //     // fetch('http://localhost:5199/Posts', { signal })
  //     //   .then((res) => res.json())
  //     //   .then((data) => {
  //     //     getInitialPosts(data.posts);
  //     //     setFetching(false);
  //     //   });
  //     // // This block wil get called when this component is destroyed.
  //     // return () => {
  //     //   controller.abort();
  //     // };
  //   }, []);
  return (
    <>
      {/* {fetching && <LoadingSpinner />} */}
      {/*!fetching &&*/ Posts.length == 0 && <WelcomeMessage />}
      {
        /*!fetching &&*/
        Posts.map((post) => (
          <Post content={post} key={post.postID}></Post>
        ))
      }
    </>
  );
};

export const postLoader = () => {
  return fetch('http://localhost:5199/Posts')
    .then((res) => res.json())
    .then((data) => {
      return data.posts;
    });
};

export default PostList;
