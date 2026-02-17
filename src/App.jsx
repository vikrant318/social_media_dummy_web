import { useState } from 'react';
import { Outlet } from 'react-router-dom';
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Sidebar from './components/Sidebar';
import ScrollToTop from './components/ScrollToTop';
import { FiAlignJustify } from 'react-icons/fi';
import PostListProvider from './store/Post_list_store';

function App() {
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
        isSidebarOpen={isSidebarOpen}
        setIsSidebarOpen={setIsSidebarOpen}
      />
      <PostListProvider>
        <div className="app-content">
          <ScrollToTop />
          <Header />
          <Outlet />
          <Footer />
        </div>
      </PostListProvider>
    </div>
  )
}

export default App
