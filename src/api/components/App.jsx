import { Form } from "../../components/Form";
import { Header } from "../../components/Header";
import { PostContainer } from "./PostContainer";
import React from "react";
export default function App() {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>Home</title>
      </head>
      <body>
        <Header />
        <main>
          <PostContainer />
          <Form />
        </main>
      </body>
    </html>
  );
}