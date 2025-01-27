import { useState } from "react";
import Input from "./Input";
import PostDisplay from "./PostDisplay";

const Home = () => {
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [error, setError] = useState("");
    const [posts, setPosts] = useState([{ title: "teste", description: "description teste" }])

    function handleCreatePost() {
        if (!title) {
            setError("EMPTY TITLE FIELD!");
            return;
        }
        if (!description) {
            setError("EMPTY DESCRIPTION FIELD!");
            return;
        }

        setPosts([...posts, {
            title: title,
            description: description
        }])

        setError("");
    }

    function handleDeletePost(index) {
        try {
            console.log(index)
            const updatePosts = posts.slice()
            updatePosts.splice(index, 1);
            setPosts(updatePosts);
        } catch (e) {
            console.log("ERROR: ", e)
        }
    }

    return (
        <div>
            <div>
                <Input setTitle={setTitle} setDescription={setDescription} />
                <button type="submit" onClick={handleCreatePost}>Create Post</button>
                {error && <p style={{ color: "red" }}>{error}</p>}
            </div>
            <div>
                {
                    posts.map((item, index) => (
                        <div key={index}>
                            <PostDisplay title={item.title} description={item.description} />
                            <button type="submit" onClick={() => { handleDeletePost(index) }}>Delete</button>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default Home;