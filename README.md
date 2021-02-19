# friendly-waffle
A reproduction of cdimascio/express-openapi-validator#539

## Requirements

- [Node.js 14+](https://nodejs.org/en/)

## Running

- Run `npm install`
- Run `npm start`

The server will be running on [localhost:3000](http://localhost:3000);

## The bug

This reproduction shows that custom error messages and status codes from the custom security handlers are not used. The
verification happens and the handlers are still required, but they are never run.

### Expected behavior

When visiting [http://localhost:3000](http://localhost:3000) without a cookie named "foo-session", the response status
should be 400 and the error message should be "sorry" as defined in the handler
([as copied from the documentation](https://github.com/cdimascio/express-openapi-validator#Advanced-Usage)).

## Actual behavior

The route returns a 401 with a message of "Unauthorized: cookie 'foo-session' required" (the default message).
