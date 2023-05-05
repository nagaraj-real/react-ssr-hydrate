import React, { Suspense } from "react"
import { AsyncPost } from "./AsyncPost"
export function PostContainer() {
    return <>
        <h3>Posts</h3>

        <Suspense fallback={<h2>...loading</h2>}>
            <AsyncPost />
        </Suspense>
    </>
}