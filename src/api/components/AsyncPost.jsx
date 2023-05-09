import React from "react"
import fetchData from "../../fetch-data";
import Post from "../../components/Post";

const ServerPost = async () => {
    let result, error;
    result = await fetchData();

    return <>
        {<Post data={result} error={error} />}
    </>
}

export const AsyncPost = React.memo(ServerPost);
