import React from "react"
import { Post } from "./Post"

export const AsyncPost = async () => {
    const id = Math.floor(Math.random() * 200);
    let result, data, error;
    try {
        result = await fetch(`https://jsonplaceholder.typicode.com/todos/${id}/?_delay=5000`);
        data = await result.json();
    } catch (ex) {
        error = ex
    }

    return <>
        <Post data={data} error={error} />
    </>
}