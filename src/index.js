const express = require('express');
const options = require('./modules'); //TODO: how ?
const Server = require('./server');

const ApolloServer = new Server(express);
ApolloServer.setUpApollo(options);
ApolloServer.run();