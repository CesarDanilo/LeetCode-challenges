import { useState } from "react";

const Input = ({ setTitle, setDescription }) => {

    return (
        <div>
            <div>
                <h2>Title</h2>
                <input className="title" type="text" name="" id="" onChange={(e) => { setTitle(e.target.value) }} />
            </div>
            <div>
                <h2>Description</h2>
                <textarea className="description" onChange={(e) => { setDescription(e.target.value) }} />
            </div>
        </div>
    )
}

export default Input;