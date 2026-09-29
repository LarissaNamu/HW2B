# OWASP Login Form

A login form that features client side and server side validation.

## Features

- Email and password input fields
- Client-side validation using HTML and JavaScript
- Server-side validation using Node.js and Express
- Error messages for invalid inputs
- Safe rendering of server responses using `textContent`

## Requirements

- Node.js
- npm

## How to Run

1. Clone this repository.
2. Open a terminal in the project directory.
3. Run `npm install`.
4. Run `node server.js`.
5. Open http://localhost:3001 in your browser.

## Security

The application validates email and password inputs on both the client and server. It uses `textContent` to prevent untrusted responses from being interpreted as HTML.