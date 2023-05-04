import { PostContainer } from "./PostContainer";
import React from "react";
export default function App() {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>My app</title>
      </head>
      <body>
        <main>
          <h3>Header</h3>
          <PostContainer />
        </main>
      </body>
    </html>
  );
}