import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import Post from "../../components/post/Post";
import "./categories.css";

export default function Categories() {
    const [posts, setPosts] = useState([]);
    const { search } = useLocation();

    useEffect(() => {
        const fetchPosts = async () => {
            const res = await fetch("/api/posts" + search);
            const data = await res.json();
            setPosts(data);
        };
        fetchPosts();
    }, [search]);

    return (
        <div className="categories">
            <h1 className="categoriesTitle">Posts in {new URLSearchParams(search).get("cat")}</h1>
            <div className="categoriesPosts">
                {posts.map((post) => (
                    <Post key={post._id} post={post} />
                ))}
            </div>
        </div>
    );
}