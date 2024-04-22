# Restaurant Search Assignment for JET Early Careers Interview Process

## Overview

The goal of this project is to display restaurant data when a user inputs a postcode.

## Built With

- Vite
- Vanilla JavaScript
- HTML
- Bootstrap

I chose to build this project using Javascript and HTML. I'm more experienced using Ruby on Rails and I initially wanted to use Rails to build the app, but felt that Vite was a better choice due to the assigment's requirements.. Using a different framework came with some lessons which are outlined further in the Notes section at the end.

Per the assigment instructions, we're only concerned with the following pieces of data from the endpoints response:

- Name
- Cuisines
- Rating - as a number
- Address

## How to Build and Run the Project

1. Clone the repository:
   `git clone https://github.com/rcopra/jet-assessment-vite.git`
2. Navigate to the project directory:
   `cd jet-assessment-vite`
3. Install the necessary Node.js dependencies:
   `npm install`
4. Start the server:
   `npm start`
5. Once the server is running, open your web browser and go to [http://localhost:5173](http://localhost:5173) (or whichever port you've configured) to view the application.

## Assumptions

- Given the time constraints and limited data requirements, a minimalist front-end design was deemed appropriate

## Potential Improvements

- Due to time constraints, the front end user interface is lacking. I would spend more time refining the design.
- Implement a structure to allow for Test Driven Development for further features.

## Notes

- CORS gave me some trouble at first. I wasn't sure how to tackle this issue at first as I haven't had experience dealing with CORS before. However, the [Mozilla Documentation](https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS) contained some helpful information. Vite also allowed for an [elegant solution for creating a proxy](https://vitejs.dev/config/server-options#server-proxy) which felt very appropriate for the project.

- I spent a lot of time overthinking some of the implementation that I settled on. I've worked on similar projects during my coding bootcamp at Le Wagon, but getting full control over choosing a framework left me feeling a bit overwhelmed. I started developing this application without a framework like Vite, but I found it challenging to create a well-structured development environment that I would feel comfortable submitting. In the end I felt using Vite would be a great way to quickly build the application without overthinking how to set up an ideal development environment.
