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
                            <button type="submit">Delete</button>
                        </div>
                    ))
                }


            </div>
        </div>
    )
}

export default Home;