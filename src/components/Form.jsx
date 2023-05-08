
"use client"
import React, { useContext, useState } from "react";
import { ThemeContext } from "./ThemeProvider";


export const Form = ({ data }) => {
    const context = useContext(ThemeContext);
    console.log('context', context);
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
        <p>The colour from Theme Context is {context}</p>
    </>)

}

export default Form;
