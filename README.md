# Story Seeker - A MERN Project

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

## Final Deployed Webpage

[Story Seeker Deployed Webpage (powered by Heroku)](https://story-seek.herokuapp.com/)

## Table of Contents

1. [Description](#description)
2. [Installation](#installation)
3. [Usage](#usage)
4. [License](#license)
5. [Contributing](#contributing)
6. [User Story/Acceptance Criteria](#user-story-and-acceptance-criteria)
7. [Questions](#questions)

## Description

The goal of this project is to provide a more performant search engine for books using MongoDB, Express, React, and Node (MERN).

### Mock Up

Searching, saving, deleting, logging out
![A gif of the portfolio site fully rendered and completed showing the searching capability of the site.](./assets/searching.gif)

### Task Completed

I've taken a Google Books API search engine built with RESTful API, refactored into a GraphQL API built with an Apollo Server. By rebuilding it with a MERN stack, it allows users to save book searches to the back end. 

Essentially, I've set up the Apollo Server to use GraphQL queries and mutations to fetch and modify data, replacing any RESTful API. I've also implemented a new authentication middleware so that it works in the GraphQL API context. By creating an Apollo Provider to communicate with the Apollo Server.

This Challenge should set myself up for future success by applying the core skills I've recently learned, primarily integrating various platforms into one, user-friendly application. The formal criteria are documented in the Acceptance Criteria section.

## Installation

This project is deployed via Heroku. To install a local instance, simply download this repo and run npm install and npm run build. 

## Usage

This project is meant to provide an easy solution implement more powerful and efficient searching over books. It is also used to save user preferences by saving and deleting favorited titles.  

## License

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

This project is licensed under the MIT license.

## Contributing

To contribute to this repository, simply create a pull request, create issues, or reach out to me (see [Questions](#questions) below). I do my best to ensure that pull requests are up to date. 

## User Story and Acceptance Criteria

### User Story

```
AS AN avid reader
I WANT to search for new books to read
SO THAT I can keep a list of books to purchase
```

### Acceptance Criteria

```
GIVEN a book search engine
WHEN I load the search engine
THEN I am presented with a menu with the options Search for Books and Login/Signup and an input field to search for books and a submit button
WHEN I click on the Search for Books menu option
THEN I am presented with an input field to search for books and a submit button
WHEN I am not logged in and enter a search term in the input field and click the submit button
THEN I am presented with several search results, each featuring a book’s title, author, description, image, and a link to that book on the Google Books site
WHEN I click on the Login/Signup menu option
THEN a modal appears on the screen with a toggle between the option to log in or sign up
WHEN the toggle is set to Signup
THEN I am presented with three inputs for a username, an email address, and a password, and a signup button
WHEN the toggle is set to Login
THEN I am presented with two inputs for an email address and a password and login button
WHEN I enter a valid email address and create a password and click on the signup button
THEN my user account is created and I am logged in to the site
WHEN I enter my account’s email address and password and click on the login button
THEN I the modal closes and I am logged in to the site
WHEN I am logged in to the site
THEN the menu options change to Search for Books, an option to see my saved books, and Logout
WHEN I am logged in and enter a search term in the input field and click the submit button
THEN I am presented with several search results, each featuring a book’s title, author, description, image, and a link to that book on the Google Books site and a button to save a book to my account
WHEN I click on the Save button on a book
THEN that book’s information is saved to my account
WHEN I click on the option to see my saved books
THEN I am presented with all of the books I have saved to my account, each featuring the book’s title, author, description, image, and a link to that book on the Google Books site and a button to remove a book from my account
WHEN I click on the Remove button on a book
THEN that book is deleted from my saved books list
WHEN I click on the Logout button
THEN I am logged out of the site and presented with a menu with the options Search for Books and Login/Signup and an input field to search for books and a submit button  
```

## Questions

If you have any questions, reach out to me through either of the methods below:
- [GitHub - J03B](https://github.com/J03B/)
- [email - (byucrazyfan@gmail.com)](mailto:byucrazyfan@gmail.com)
