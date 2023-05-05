.

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3001/home](http://localhost:3001/home) to view it in your browser.

## React Sever Side Rendering

All components in this App are rendered on the server side. Hence, we do not need any Javascript to be enabled on browser to run this App. Node Streaming is used to deliver the html content to the browser.
The main goal of this App is to showcase how suspense can be used in the current and expermimental(Canary) versions of react.

# API

We are using JSON placeholder APIs for this demo. A delay of 5000ms is forced on these APIs to trigger suspense and show loading state.

https://jsonplaceholder.typicode.com/todos/${id}/?_delay=5000

# React 18 Suspense

In the current stable release, the only way to trigger a suspense is to throw a promise.
This will cause the component to get unmounted and mounted again once promise is resolved.
To achieve this, we are using a HOC 'withSuspensePromise' which accepts a promise, throws it
and tries to resolve. The component passed in is decorated with result or error.

Refer AsyncPost component.

```jsx
export const withSuspensePromise = (Component, promise) => {
  let data, error;
  promise
    .then((response) => {
      return response.json();
    })
    .then((result) => {
      data = result;
    })
    .catch((ex) => {
      error = ex;
    });

  return ({ props }) => {
    if (!data && !error) {
      throw promise;
    }
    return <Component {...props} data={data} error={error} />;
  };
};
```

# React Expermiental Suspense

In the the experimental version of React, we have the option to use Async Components.
Yes, we will be able to use our Async/Await syntax to fetch the data just like any node server application.
The same Async Component can be wrapped inside Suspense. React does the suspension and mounting automatically for us. This is the recommended way to use Suspense if we are creating our own API fetching logic.

Refer AsyncPostCanary component.

```jsx
export const AsyncPostCanary = async () => {
  const id = Math.floor(Math.random() * 200);
  let result, data, error;
  try {
    result = await fetch(
      `https://jsonplaceholder.typicode.com/todos/${id}/?_delay=5000`
    );
    data = await result.json();
  } catch (ex) {
    error = ex;
  }

  return (
    <>
      <h2>Posts</h2>
      <Suspense fallback={<h2>...loading</h2>}>
        <Post data={data} error={error} />
      </Suspense>
    </>
  );
};
```
