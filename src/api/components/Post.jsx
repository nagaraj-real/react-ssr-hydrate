import React from "react"
export const Post = ({ data, error }) => {
    return error ? <h2>Error occured during fetch</h2> : <h2>{data?.title}</h2>
}