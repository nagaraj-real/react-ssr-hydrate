import React from "react"
import { AsyncPost } from "./AsyncPost"
import { AsyncPostCanary } from "./AsyncPostCanary"
export function PostContainer() {
    return <>
        <h3>Server Post</h3>
        {/* <AsyncPost /> */}
        <AsyncPostCanary />
    </>
}