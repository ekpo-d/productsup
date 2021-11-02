# Productsup Table Filter
This is an Angular app which displays data and allows for the use of user-defined filters.

## Table of Contents
* [Introduction](#introduction)
* [Available Scripts](#available-scripts)
  * [yarn start](#yarn-start)
  * [yarn test](#yarn-test)
  * [yarn frontend](#yarn-frontend)
  * [yarn backend](#yarn-backend)
  * [yarn doc](#yarn-doc)
* [Libs](#libs)
* [Enhancements](#enhancements)


## Introduction
This app displays data retrieved from an API. This app gives the ability to extensively fiter through the data and also view a single piece of data.

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 12.2.12.


## Available Scripts
Yarn required for executing the scripts below. If you don't have it installed be run the command below:
`npm install --global yarn`

### `yarn start`
Run `yarn start` to start both the frontend and backend development servers.
Navigate to `http://localhost:4200/` for the frontend app. The app will automatically reload if you change any of the source files.
Navigate to `http://localhost:5000/` for the backend server.

### `yarn test`
Run `yarn test` to run tests on the app.

### `yarn frontend`
Run `yarn frontend` to start only the frontend development server.
Navigate to `http://localhost:4200/` for the frontend app. The app will automatically reload if you change any of the source files.

### `yarn backend`
Run `yarn backend` to start only backend development server then avigate to `http://localhost:5000/`.

### `yarn doc`
Run `yarn doc` to generate project documentation.


## Libs
This app uses a couple of external libraries/tools;
1. Bootstrap - CSS framework for styling
2. JSON Server - Full fake REST API for the backend. Data supplied to the frontend can be changed by updating the `db.json` file.
3. Compodoc - Documentation generation tool
4. Cucumber - Behavior-Driven Development (BDD) testing toolkit.


## Enhancements
Below are a couple of enhancements/todos identified;
1. Mobile friendly version - Although bootstrap was used in development, a more mobile friendly version should be considered.
2. Higher Test Coverage
