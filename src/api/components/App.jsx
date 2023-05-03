import { PostContainer } from "./PostContainer";
export default function App() {
    return (
      <html>
        <head>
          <meta charSet="utf-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <link rel="stylesheet" href="/styles.css"></link>
          <title>My app</title>
        </head>
        <body>
            <main>
              <h3>Header</h3>
              <PostContainer/>
            </main>
        </body>
      </html>
    );
  }