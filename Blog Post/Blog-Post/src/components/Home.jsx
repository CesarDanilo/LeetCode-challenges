import { useState } from "react";
import Input from "./Input";
import PostDisplay from "./PostDisplay";

const Home = () => {
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");

    function handleCreatePost() {
        if (title) {
            console.log("TITULO PREENCHIDO!")
            if (description) {
                console.log("DESCRIPTION PREENCHIDO!")

            } else {
                window.alert("EMPTY DESCRIPTION FIELD!")
            }
        } else {
            window.alert("EMPTY TITLE FIELD!")
        }
    }

    return (
        <div>
            <div>
                <Input setTitle={setTitle} setDescription={setDescription} />
                <button type="submit" onClick={handleCreatePost}>Create Post</button>
            </div>
            <div>
                <PostDisplay />
                <button type="submit">Delete</button>
            </div>
        </div>
    )
}

export default Home;