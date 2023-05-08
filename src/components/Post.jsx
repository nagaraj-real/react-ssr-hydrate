"use client"
import React, { useEffect, useState } from "react";

export const Post = ({ data, error }) => {
    const result = data.title ? data : JSON.parse(data);
    const [clientData, setClientData] = useState('');

    useEffect(() => {
        console.log("in effect")
        setClientData('test2')
    }, [])
    return <>
        <h4>Post Server Component</h4>
        <span>Dynamic data from parent Server Async Component - </span>
        {error ? <span>Error occured during fetch</span> : <span>{result?.title}</span>}
        <p>Client Data Added - {clientData}</p>
    </>
}

export default Post;
