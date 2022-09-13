import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App/App';
import {ApolloProvider, ApolloClient, InMemoryCache} from '@apollo/client';

const root = ReactDOM.createRoot(document.getElementById('root'));

const client = new ApolloClient({
    uri: 'http://127.0.0.1:5000/graphql',
    cache: new InMemoryCache(),
    defaultOptions: {
        query: {
            fetchPolicy: 'network-only',
        },
    },
});

root.render(
        <ApolloProvider client={client}>
            <App/>
        </ApolloProvider>
);

