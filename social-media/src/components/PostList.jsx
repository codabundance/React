import { useContext } from 'react';
import Post from './Post';
import { PostStore } from '../store/PostsProviders';

const PostList = () => {
  let { Posts } = useContext(PostStore);
  return (
    <>
      {Posts.map((post) => (
        <Post content={post}></Post>
      ))}
    </>
  );
};
export default PostList;
