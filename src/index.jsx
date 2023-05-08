import React from "react";
import { hydrateRoot } from "react-dom/client";
import Form from "./components/Form";
import Post from "./components/Post";
import { ThemeProvider } from "./components/ThemeProvider";


// serialization and selective hydration
hydrateRoot(document.getElementById('client-form'), <Form data="This is Static data from parent RSC" />);
hydrateRoot(document.getElementById('client-post'), <Post data={{ "userId": 1, "id": 10, "title": "illo est ratione doloremque quia maiores aut", "completed": true }} />);
hydrateRoot(document.getElementById('client-theme'), <ThemeProvider><h4>Post Container Server Component</h4><div id="client-post"><Post data={{ "userId": 1, "id": 10, "title": "illo est ratione doloremque quia maiores aut", "completed": true }} /></div><div id="client-form"><Form data="This is Static data from parent RSC" /></div></ThemeProvider>);


