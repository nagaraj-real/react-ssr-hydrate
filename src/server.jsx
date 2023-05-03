
import express from "express";
import { renderToPipeableStream } from 'react-dom/server';
import App from "./api/components/App.js";
const app = new express();


app.use('/home', (request, response) => {
    const { pipe } = renderToPipeableStream(<App />, {
      bootstrapScripts: ['/main.js'],
      onShellReady() {
        console.log('shell ready')
        response.setHeader('content-type', 'text/html');
        pipe(response);
      }
    });
});

app.listen(3001)
