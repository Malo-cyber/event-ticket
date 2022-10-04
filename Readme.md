# Event tickets platform

## Phase 1

Build an event ticketing platform

- 1 page for listing tickets `/tickets`
- 1 page for buying ticket(s) `/tickets/buy`

MySQL database

- table people (name, email)
- table concerts (name, location, date)
- table tickets (relation people concerts)

Backend: use one of these

- Laravel or plain PHP
- NodeJS/Express (JavaScript)

Frontend: any framework allowed

- Bootstrap / PureCSS / jQuery …
- React / Angular / Vue / …

## Phase 2

Write the configuration files to build a Docker image of the project

Use Github Actions to build project triggered on a push on the main or dev branch

# Project run:
## backend setup :
- go to ~/backend/db/db.js and set your MySQL server infos as :
- module.exports = new sequelize.Sequelize('[DB_NAME]', '[ADMIN_NAME]', '[ADMIN_PSW]', {dialect : 'mysql', host : '[HOST]'});

## run backend : 
- ~/backend:  npm run dev
- make sure the server is listning on port 1080 as long as the url in the frontend are not globaly but individualy set for each services --> this can be a future improvement 

## run frontend :
- ~/frontend/event-front: ng serve
- enjoy ! 

