import React, { Suspense } from "react"
import { AsyncPost } from "./AsyncPost"
export function PostContainer() {
    return <>
        <h4>Post Container Server Component</h4>

        <Suspense fallback={<h2>...loading</h2>}>
            <AsyncPost />
        </Suspense>
    </>
}