#!/usr/bin/env node

const cookieParser = require('cookie-parser');
const express = require('express');
const OpenApiValidator = require('express-openapi-validator');

const app = express();
const port = 3000;

app.use(cookieParser());
app.use(
    OpenApiValidator.middleware({
        apiSpec: './api.yml',
        validateRequests: true,
        validateResponses: true,
        validateApiSpec: true,
        validateSecurity: {
            handlers: {
                cookieAuth: (req, scopes, schema) => {
                    console.log('Cookie is not present!');
                    throw { status: 400, message: 'sorry' };
                }
            }
        },
    }),
);

app.get('/', (req, res) => {
    res.json({ message: 'Hello World!' });
})

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
})
