import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.jsx';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import CreatePost from './components/CreatePost.jsx';
import PostList from './components/PostList.jsx';
import { postLoader } from './components/PostList.jsx';
import { handlePostData } from './components/CreatePost.jsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      { path: '/create-post', element: <CreatePost />, action: handlePostData },
      { path: '/', element: <PostList />, loader: postLoader },
    ],
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </StrictMode>
);
