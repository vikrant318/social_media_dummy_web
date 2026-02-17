import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, Navigate, RouterProvider } from 'react-router-dom';
import App from './App.jsx'
import CreatePost from './components/CreatePost.jsx';
import MyPosts from './components/MyPosts.jsx';
import PostList from './components/PostList.jsx';
import Friends from './components/Friends.jsx';
import Settings from './components/Settings.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { index: true, element: <PostList />},
      { path: "/create-post", element: <CreatePost />},
      { path: "/my-posts", element: <MyPosts /> },
      { path: "/friends", element: <Friends /> },
      { path: "/settings", element: <Settings /> },
      { path: "*", element: <Navigate to="/" replace /> },
    ],
  },
], {
  basename: import.meta.env.BASE_URL,
});

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
);
