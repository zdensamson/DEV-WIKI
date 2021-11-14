import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink,
} from '@apollo/client';
import { setContext } from '@apollo/client/link/context';
import './App.css';

import Navbar from './components/Navbar';

import Home from './pages/Home';
import Request from './pages/Request';
import Login from './pages/Login';
import Signup from './pages/Signup'

const httpLink = createHttpLink({
  uri: '/graphql'
});

const authLink = setContext((_, { headers }) => {
  const token = localStorage.getItem('id_token');
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : '',
    },
  };
});

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
})

function App() {
  return (
    <ApolloProvider client={client}>
      <div>
        <Router>
          <Navbar />
          <Switch>
            <Route path='/' exact component={Home} />
            <Route path='/request' component={Request} />
            <Route path='/login' component={Login} />
            <Route path='/signup' component={Signup} />
          </Switch>
        </Router>
      </div>
    </ApolloProvider>
  )
}

export default App;