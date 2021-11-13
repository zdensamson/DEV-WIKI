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
import Push from './pages/Push';
import Pull from './pages/Pull';


const httpLink = createHttpLink({
  uri: 'http://localhost:3001/graphql'
});

const client = new ApolloClient({
  link: httpLink,
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
          <Route path='/push' component={Push} />
          <Route path='/pull' component={Pull} />
        </Switch>
      </Router>
      </div>
    </ApolloProvider>
)
}

export default App;
