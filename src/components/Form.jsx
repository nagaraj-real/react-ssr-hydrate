
"use client"
import React, { useState } from "react";
export const Form = () => {
    const [search, setSearch] = useState('');
    const [result, setResult] = useState('')

    function onchange(e) {
        setSearch(e.target.value)
    }

    function handleSubmit(e) {
        e.preventDefault();
        setResult(search);
    }

    return <form onSubmit={handleSubmit}>
        <input name="search" value={search} onChange={onchange}></input>
        <input type="submit" value="Submit" />
        {result && <div>
            <output>Submitted Value - {result}</output>
        </div>}
    </form>
}