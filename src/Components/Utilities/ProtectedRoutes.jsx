import React from "react";
import { Route, Redirect } from "react-router";
import { AuthenticationContext } from "../../Context/Authentication/Authentication";
/**
 * For content that we do not want the user to see unless they are logged in.
 * This will redirect the user to the login form if they haven't logged in.
 * @param {Object} props which contains the child component to render, whether or not the user is logged in, a function to change whether or not he user is logged in, and the rest of the props passed down from the parent in App.jsx
 * @example {
 *   component: <LoggedIn />,
 *   isUserLoggedIn: true,
 *   setUserLoggedIn: () => { ... },
 *   foo: "bar",
 *   hello: "world"
 * }
 */
export const ProtectedRoute = ({
  component: Component, // Capitalizing because React requires components names to be capitialized
  isUserLoggedIn,
  setUserLoggedIn,
  ...restOfPropsFromParent
}) => {
  return (
    <Route
      {...restOfPropsFromParent}
      render={(propsFromReactRouter) => {
        /**
         * If the user is logged in, return the child component with these additional props:
         * - props from React Router
         * - functionality to log the user out
         */
        return isUserLoggedIn ? (
          <Component
            {...propsFromReactRouter}
            setUserLoggedIn={setUserLoggedIn}
          />
        ) : (
          /**
           * If the user isn't logged in, redirect to the login form, which in this example, is "/".
           */
          <Redirect
            to="/"
            {...propsFromReactRouter}
            {...restOfPropsFromParent}
          />
        );
      }}
    />
  );
};
