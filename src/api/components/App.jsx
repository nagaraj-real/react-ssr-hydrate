import Form from "../../components/Form";
import { ThemeProvider } from "../../components/ThemeProvider";
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
          <ThemeProvider>
            <PostContainer />
            <Form data={'This is Static data from parent RSC'} />
          </ThemeProvider>
        </main>
      </body>
    </html>
  );
}