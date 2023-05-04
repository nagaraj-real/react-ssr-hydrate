import React from "react";
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
