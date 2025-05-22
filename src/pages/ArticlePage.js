import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import articles from '../components/Article-content';

const Article = () => {
    const { articleId } = useParams();
    const navigate = useNavigate();
    const article = articles.find(article => article.id === articleId);

    if (!article) {
        navigate('/article');
        return null;
    }

    return (
        <div>
            <h1>{article.title}</h1>
            {Array.isArray(article.content) ? (
                article.content.map((paragraph, i) => (
                    <p key={i}>{paragraph}</p>
                    
                ))
            ) : (
                <h3>{article.content}</h3>
                
            )}
        
        </div>
    );
}

export default Article;