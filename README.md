# JustEatTakeaway Project

## Description

The goal of this project was to retrieve restaurant data based on a given UK postcode and present it in a user-friendly interface based on a JustEatTakeaway API.
The technologies used for front-end development were React and Chakra UI which were chosen based on the simplicity of the application, such as NodeJS for backend.

## Challenges

The biggest challenge was dealing with the [CORS](https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS) error. After some research it was solved by using NodeJS to wrap the API, preventing the error.

## Requirements

- NodeJS

## How to Install and Run

Installing dependencies:
`npm install`

To execute project's backend:
`node server.js`

To execute project's frontend:
`npm start`

Then a `localhost:3000` tab will open.

## Improvements

- API error management.
- Add filters to restaurant listing.
