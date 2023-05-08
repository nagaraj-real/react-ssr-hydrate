import React from "react"

const Post = async () => {
    let data, result, error, ClientPost;
    try {
        result = await fetch(`https://jsonplaceholder.typicode.com/todos/10/?_delay=5000`);
        data = await result.json();
        console.log(data)
        ClientPost = React.lazy(() => import('../../components/ClientPost'))

    } catch (ex) {
        error = ex
    }

    return <>
        {ClientPost && <ClientPost data={data} error={error} />}
    </>
}

export const AsyncPost = Post;