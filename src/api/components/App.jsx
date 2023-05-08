
import ClientForm from "../../components/ClientForm";
import { Header } from "./Header";
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
          <ClientForm data={'This is Static data from parent RSC'} />
        </main>
      </body>
    </html>
  );
}