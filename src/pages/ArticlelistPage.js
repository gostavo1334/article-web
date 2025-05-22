import React from 'react';
import { Link } from 'react-router-dom';
import articles from '../components/Article-content';
import './ArticlelistPage.css';  // Add this import

const Articlelist = () => {
    return (
        <div className="article-container">
            <h1>Articles</h1>
            {articles.map(article => (
                <div key={article.id} className="article-item">
                    <Link to={`/article/${article.id}`} style={{ textDecoration: 'none' }}>
                        <h3 className="article-title">{article.title}</h3>
                    </Link>
                    <p className="article-preview">
                        {Array.isArray(article.content) 
                            ? article.content[0].substring(0, 150)
                            : article.content.substring(0, 150)}
                        ...
                    </p>
                </div>
            ))}
        </div>
    );
}

export default Articlelist;