import React from "react";

// Apollo 
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink,
} from "@apollo/client";

import { setContext } from "@apollo/client/link/context";

const httpLink = createHttpLink({
  uri: "/graphql",
});

// Construct request middleware that will attach the JWT token to every request as an `authorization` header
const authLink = setContext((_, { headers }) => {
  // get the authentication token from local storage if it exists
  const token = localStorage.getItem("id_token");
  // return the headers to the context so httpLink can read them
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : "",
    },
  };
});

const client = new ApolloClient({
  // Set up our client to execute the `authLink` middleware prior to making the request to our GraphQL API
  link: authLink.concat(httpLink),

  cache: new InMemoryCache(),
});

// Wrapper 
import { StatueStatus } from "./pages";

// Router 
import { BrowserRouter as Router } from "react-router-dom";

// Bootstrap 
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";

// Styles 
import "./sass/main.scss";

function App() {
  return (
    <ApolloProvider client={client}>
      <Router>

        {/* Statue Status Wrapper  */}
        <StatueStatus />

      </Router>
    </ApolloProvider>
  );
}

export default App;
