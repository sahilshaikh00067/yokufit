import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const API_BASE = "http://yokufit.onrender.com//api";

export default function SingleArticle() {
    const { id } = useParams();
    const [article, setArticle] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    
    useEffect(() => {
        const fetchArticle = async () => {
            try {
                const res = await fetch(`${API_BASE}/articles/${id}/`);
                if (!res.ok) throw new Error('Failed to fetch Article');
                const data = await res.json();
                setArticle(data);
            } catch (err) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };
        fetchArticle();
    }, [id]);

    if (loading) return <div>Loading...</div>;
    if (error) return <div>Error: {error}</div>;
    if (!article) return <div>No Article found</div>;

    return (
        <div style={{ padding: '20px' }}>
            <h2>{article.title1}</h2>
            {article.image1 && (
                <img
                    src={`http://yokufit.onrender.com${article.image1}`}
                    alt={article.title1}
                    style={{ width: '100%', maxWidth: '600px' }}
                />
            )}
            <p><b>Introduction:</b> {article.introduction1}</p>
            <p><b>Description:</b> {article.description1}</p>
            <p><b>Content:</b> {article.paragraph1}</p>
        </div>

    );

}
