
"use client"
import React, { useState } from "react";


export const Form = ({ data }) => {
    const [search, setSearch] = useState('');
    const [result, setResult] = useState('')

    function onchange(e) {
        setSearch(e.target.value)
    }

    function handleSubmit(e) {
        e.preventDefault();
        setResult(search);
    }

    return (<>
        <h4>Form Client Component</h4>
        <p>Static data from parent server component - {data}</p>
        <form onSubmit={handleSubmit}>

            <input name="search" value={search} onChange={onchange}></input>
            <input type="submit" value="Submit" />
            {result && <div>
                <output>Submitted Value - {result}</output>
            </div>}
        </form>
    </>)

}

export default Form;
