import React from "react"
import { Post } from "./Post"

export const AsyncPost = async () => {
    let result, data, error;
    try {
        result = await fetch(`https://jsonplaceholder.typicode.com/todos/10/?_delay=5000`);
        data = await result.json();
    } catch (ex) {
        error = ex
    }

    return <>
        <Post data={data} error={error} />
    </>
}