const express = require('express');
const app = express();
const dotenv = require('dotenv').config();
const PORT = process.env.PORT || 5000;
const {graphqlHTTP} = require('express-graphql');
const {schema} = require('./Schema/schema');
require('./Configs/database.config');

app.use('/graphql', graphqlHTTP({
    graphiql: process.env.NODE_RUN_TYPE === 'development',
    schema: schema
}));

app.listen(PORT, () => {
    console.log(`Sunucu, ${PORT} portunda dinleniyor...`);
});
