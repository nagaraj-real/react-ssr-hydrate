
import ClientForm from "../../components/ClientForm";
import ClientThemeProvider from "../../components/ClientThemeProvider";
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
          <ClientThemeProvider>
            <PostContainer />
            <ClientForm data={'This is Static data from parent RSC'} />
          </ClientThemeProvider>
        </main>
      </body>
    </html>
  );
}