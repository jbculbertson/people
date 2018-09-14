# People Uploader

This is the repo for the react-powered People Uploader app.  The People Uploader allows you to upload a list of your friends, attaching info to each person.  The app stores your friends, and secures them behind a password protected login page.

## Project Description

This project was a response to a coding challenge presented to me.  The goal was to create a full stack app (backend repo linked below), allowing users to upload a file containing information about people.  The backend needed to persist this info, and the front end needed a real-time display of people.

I took the extra step of requiring a login to the site, so that I could persist and display all all time view of people uploaded by each user.

I chose to spend a total of 2 working days on this.  In order to achieve this, my strategy involved using a design framework (Semantic UI, not acheiving pixel perfection on the mockup, and some code that could easily be refactored for a more scalable solution.).


## Backend Repo

[People-API Repo](https://github.com/jbculbertson/people-api)

## How it works

You need to upload a .txt file, in the same format as either `pipe.txt`, `comma.txt` or `space.txt`.  You'll see these people automatically appended to the list of people.

## Setup

First, you'll need to clone the repo and `cd` into it.

```
git clone git@github.com:jbculbertson/people.git
cd people
```

Then, install packages.

```
npm install
```

This app makes use of packages like.

*   `Lodash` for helper functions
*   `Axios` for API calls
*   `Moment` for parsing javascript dates
*   `Redux` for app state management
*   `Semantic-UI` as a front-end template
*   `Papaparse` for parsing files

## Run

You'll need to have [People API](https://github.com/jbculbertson/people-api) running.

Using .sample.env as a template, setup your environment variables.

Spin up the app:

```
npm start
```
