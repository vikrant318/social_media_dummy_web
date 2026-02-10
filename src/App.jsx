import { useState } from 'react';
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Sidebar from './components/Sidebar';
import CreatePost from './components/CreatePost';
import MyPosts from './components/MyPosts';
import PostList from './components/PostList';
import Friends from './components/Friends';
import Settings from './components/Settings';
import { FiAlignJustify } from 'react-icons/fi';
import PostListProvider from './store/Post_list_store';

function App() {
  const [selectedTab, setSelectedTab] = useState("Home");
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <div className="app-layout">
      <button
        type="button"
        className="btn btn-dark menu-trigger"
        onClick={() => setIsSidebarOpen(!isSidebarOpen)}
      >
        <FiAlignJustify size={22} className="sidebar-icon" />
      </button>
      {isSidebarOpen && <div className="sidebar-overlay" onClick={() => setIsSidebarOpen(false)}></div>}
      <Sidebar
        selectedTab={selectedTab}
        setSelectedTab={setSelectedTab}
        isSidebarOpen={isSidebarOpen}
        setIsSidebarOpen={setIsSidebarOpen}
      />
      <PostListProvider>
        <div className="app-content">
          <Header />
          {selectedTab === "Home" ? (
          <PostList />
          ) : selectedTab === "Create Post" ? (
            <CreatePost />
          ) : selectedTab === "My Posts" ? (
            <MyPosts />
          ) : selectedTab === "Friends" ? (
            <Friends />
          ) : selectedTab === "Settings" ? (
            <Settings />
          ) : null}
          <Footer />
        </div>
      </PostListProvider>
    </div>
  )
}

export default App
