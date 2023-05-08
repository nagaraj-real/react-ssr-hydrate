import React from "react"
import ClientPost from "../../components/ClientPost";

const Post = async () => {
    let data, result, error;
    try {
        result = await fetch(`https://jsonplaceholder.typicode.com/todos/10/?_delay=5000`);
        data = await result.json();
        console.log(data)

    } catch (ex) {
        error = ex
    }

    return <>
        {<ClientPost data={data} error={error} />}
    </>
}

export const AsyncPost = Post;