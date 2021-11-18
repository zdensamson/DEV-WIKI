//MVP NOTES: ADDITONAL STYLING(post form, login/logout/Register, Home page), DELETE posts/reactions, Add Reactions, Render Single Post, Fix Cards
//Additonal Notes: Update Posts/Reactions, Contact Form, Donations/Budget, Add resolved functionality, add filtering functionality,

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
import Signup from './pages/Signup';
import SinglePost from './pages/SinglePost';
import Contact from './pages/Contact'

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
            <Route path='/contact' component={Contact} />
            <Route exact path="/post/:id" component={SinglePost} />
          </Switch>
        </Router>
      </div>
    </ApolloProvider>
  )
}

export default App;