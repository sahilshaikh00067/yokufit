import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const API_BASE = "http://yokufit.onrender.com/api";


export default function Posts() {
    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchPosts = async () => {
            try {
                const res = await fetch(`${API_BASE}/posts/`);
                if (!res.ok) throw new Error('Failed to fetch Posts');
                const data = await res.json();
                setPosts(data);
            } catch (err) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };
        fetchPosts();
    }, []);

    if (loading) return <div>Loading...</div>;
    if (error) return <div>Error: {error}</div>;

    return (
        <div style={{ padding: '20px' }}>
            <h2>Yoga Posts</h2>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '20px' }}>
                {posts.map(post => (
                    <div key={post.id} style={{ border: '1px solid #ddd', padding: '10px', width: '300px' }}>
                        <h3>
                            <Link to={`/posts/${post.id}`} style={{ textDecoration: 'none', color: 'green' }}>
                                {post.title}
                            </Link>
                        </h3>
                        {post.image && (
                            <img
                                src={`http://yokufit.onrender.com${post.image}`}
                                alt={post.title}
                                style={{ width: '100%' }}
                            />
                        )}
                        <p>{post.description}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}
