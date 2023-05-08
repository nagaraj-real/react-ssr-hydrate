import React from "react";
import { hydrateRoot } from "react-dom/client";
import Form from "./components/Form";
import Post from "./components/Post";


// serialization and selective hydration
hydrateRoot(document.getElementById('client-form'), <Form data="This is Static data from parent RSC" />);
hydrateRoot(document.getElementById('client-post'), <Post data={{ "userId": 1, "id": 10, "title": "illo est ratione doloremque quia maiores aut", "completed": true }} />);
