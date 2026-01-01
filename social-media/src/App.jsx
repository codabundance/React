import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Sidebar from './components/Sidebar';
import CreatePost from './components/CreatePost';
import PostList from './components/PostList';
import { useState } from 'react';
import SocialMediaPostProvider from './store/PostsProviders';

function App() {
  const [selectedTab, setSelectedTab] = useState('Home');
  return (
    <>
    <SocialMediaPostProvider>
      <div className="main-container">
        <Sidebar selectedTab={selectedTab} ClickSelectedTab={setSelectedTab}></Sidebar>
        <div className="content-container">
          <Header></Header>
          {selectedTab === 'Home' ? (
            <PostList></PostList>
          ) : (
            <CreatePost></CreatePost>
          )}
          <Footer></Footer>
        </div>
      </div>
    </SocialMediaPostProvider>
    </>
  );
}

export default App;
