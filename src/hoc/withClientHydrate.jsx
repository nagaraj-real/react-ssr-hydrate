import React from "react";
const fs = require('fs');


export const withClientHydrate = (id, Component) => {

    return ({ ...props }) => {
        const message = `${id}:${JSON.stringify(props)};`
        fs.appendFile('message.txt', message, function (err) {
            if (err) throw err;
            console.log('Saved!');
        });
        return (<div id={id}>
            <Component {...props} />
        </div>)
    }
}