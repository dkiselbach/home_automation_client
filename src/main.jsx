import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';
import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client';
import { Router, hashHistory, Route, IndexRoute } from 'react-router';

const client = new ApolloClient({
  dataIdFromObject: (o) => o.id,
  uri: 'http://localhost:4000/graphql',
  cache: new InMemoryCache(),
});

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ApolloProvider client={client}>
      <Router history={hashHistory}>
        <Route path={'/'} component={App}></Route>
      </Router>
    </ApolloProvider>
  </React.StrictMode>,
);
