import React, { Suspense } from "react"
import { withSuspensePromise } from "../../hoc/withSuspensePromise"
import { Post } from "./Post"

export const AsyncPost = () => {
    const id = Math.floor(Math.random() * 200);
    const PostData = withSuspensePromise(Post, fetch(`https://jsonplaceholder.typicode.com/todos/${id}/?_delay=5000`))

    return <>
        <h2>Posts</h2>
        <Suspense fallback={<h2>...loading</h2>}>
            <PostData />
        </Suspense>
    </>
}