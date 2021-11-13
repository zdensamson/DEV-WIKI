import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink,
} from '@apollo/client';
import { setContext } from '@apollo/client/link/context';

import Home from './pages/Home';

const httpLink = createHttpLink({
  uri: '/graphql'
});

const client = new ApolloClient({
  link: httpLink,
  cache: new InMemoryCache(),
})

function App() {
  return (
    <ApolloProvider client={client}>
      <div>
          {/* HEADER */}
          <Home></Home>
          {/* FOOTER */}
      </div>
    </ApolloProvider>
)
}

export default App;
