## Capstone Project

## Introduction

For my final project my goal was to create a web application that would allow users to keep track of shoes they wanted to sell and clothes that they had for rent in an effort to eliminate the fees paid to consignment shops and enable peer to peer lending.

## Technologies Used
- React Js
- Java
- Spring Boot
- Postgres SQL
- Reactstrap

## Dependencies

Spring Initializer
https://start.spring.io

- Spring Web
- Rest Repositories
- Spring Data JPA
- PostgresSQL Driver
- Spring Boot Dev Tools
- Spring Data JDBC

React
- npm create-react-app
- npm install react-bootstrap bootstrap
- npm style-components

## Approach Taken

After deciding on my project idea I first wanted to wireframe the initial flow of the site and layout what relationships I would need to have. I chose to use both figma and white boarding to complete this task. Then, I did some research to see if I there were any external APIs I could use to  help bring in the information of the products users would add to their closet. Unfortunately when looking into a Barcode API that would return sneaker and clothes information to help pre-populate the fields when a user provides a barcode.

![Wireframe 1](/src/assets/sneakerframe1.png)

![Wireframe 2](/src/assets/sneakerframe2.png)

![Wireframe 3](/src/assets/sneakerframe3.jpg)

![Wireframe 4](/src/assets/sneakerframe2.jpg)

Initial Timeline

Week| Day | Task
----| ---- | ----
Week 1 |Monday | Wireframe and start building back-end in Java
Week 1 |Tuesday/Wednesday | Continue building out the back-end and start testing in Postman
Week 1 |Wednesday |Researching in React and start building the front-end
Week 1 |Thursday/Friday/Saturday | Continue building the front-end
Week 2 |Monday | Testing front-end Start Microservices
Week 2 |Tuesday/Wednesday | Deploy on AWS
Week 2 |Thursday | Testing entire project


## Project Hurdles

Each day brought a different challenge but the biggest challenge was present on Monday of Week 2 when I had to start my React front-end over again because I wasn't passing props effectively, but it was a good learning experience.

## User Stories

**Administrator**: As an Administrator, I want to allow users to signup, login, view sneakers/clothes, add sneakers/clothes, delete sneakers/clothes, and contact users to buy sneakers or rent clothes.

**User:**: As a User, I want to add sneakers/clothes to my closet, delete sneakers/clothes, view sneakers/clothes that other users have for sale or rent.


## What I Would Add

There are a couple of functionalities I would add to enhance my application.

1. Allow users to chose from preset options for the size and condition fields
2. Allow users to upload pictures of there shoes and clothes
3. Incorporate search capability into the clothes and shoes pages so users can look for specific item
4. Allow users to track the amount of money that their closet has made them
