import React from "react";
import { renderToReadableStream, renderToStaticMarkup, renderToString } from "react-dom/server";
const fs = require('fs');


export const withClientHydrate = (id, Component) => {

    return ({ ...props }) => {
        console.log(props.children);
        // console.log(renderToStaticMarkup(props.children))
        const message = `${id}:${JSON.stringify(props)};`
        fs.appendFile('message.txt', message, function (err) {
            if (err) throw err;
            console.log('Saved!');
        });
        return (<div id={id}>
            <Component {...props}>
                {props.children}
            </Component>
        </div>)
    }
}