import React, { Suspense } from "react"
import { AsyncPost } from "./AsyncPost"
import { AsyncPostCanary } from "./AsyncPostCanary"
export function PostContainer() {
    return <>
        <h3>Server Post</h3>

        <Suspense fallback={<h2>...loading</h2>}>
            <AsyncPost />
            {/* <AsyncPostCanary /> */}
        </Suspense>
    </>
}