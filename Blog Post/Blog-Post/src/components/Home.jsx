import Input from "./Input";
import PostDisplay from "./PostDisplay";

const Home = () => {
    return (
        <div>
            <div>
                <Input />
                <button type="submit">Create Post</button>
            </div>
            <div>
                <PostDisplay />
                <button type="submit">Delete</button>
            </div>
        </div>
    )
}

export default Home;