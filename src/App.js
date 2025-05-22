import './App.css';
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Homepage from './pages/Homepage';
import About from './pages/AboutPage';
import Article from './pages/ArticlePage';
import Articlelist from './pages/ArticlelistPage';
import NavBar from './NavBar';

function App() {
  return (
    <Router>
      <div className="App">
        <NavBar />
        <div className="content">
          <h1>My awesome blog</h1>
          <div id="page-body">
            <Routes>
              <Route path="/" element={<Homepage />} />
              <Route path="/about" element={<About />} />
              <Route path="/article" element={<Articlelist />} />
              <Route path="/article/:articleId" element={<Article />} />
            </Routes>
          </div>
        </div>
      </div>
    </Router>
  );
}

export default App;