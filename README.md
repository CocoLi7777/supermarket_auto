# Supermarket stock availability automation
The idea of this project come in the current situation to fight COVID-19 pandemic. As the panic buying distrupts supermarket stock and distribution, I would like to create a tool that can help people to receive the availability notification easier and avoid unnecessary movement.  
This project is build with [Cypress](https://www.cypress.io/) to run an UI automation to check the supermarket product availability.
With the help of the [Circle CI](https://circleci.com/) scheduled workflow, it will be running periodically to help people check the stock availability for a particular product and receive Slack notification.
This is a usefully tool that can help people use in a daily basis, also it is a good practice to try out the end to end testing framework and continous integration tools. Most importantly, this project is a simple, but not easy, solution to solve real life problem in a cost-effective(no cost) manner.
## Getting started
### Prerequisites
1. Node: any version starting with 8.4.0 or greater
  - run `node --version` to check current node version
  - If you need to upgrade or install [NodeJs](http://nodejs.org/) : suggest to install via [Node Version Manager NVM](https://github.com/creationix/nvm)
2. A clone or download of this repo on your local machine
### Installation
1. `cd` to the project root
2. `npm install`to install the npm dependencies
### Running locally
- `npm run cypress:open` to start cypress dashboard and run all automation
- `npm run e2e` to run the automation in background
### Config Circle CI
- Create a Circle CI account and like to github
- Fork this repo and setup project connection this repo
- The workflow is already configure in `.circleci/config.yml` it is currently a scheduled [cron job](https://en.wikipedia.org/wiki/Cron) that run hourly
## Implementation details
I want to make it possible to simulate the user searching product in supermarket website and check the availability. With the help of Cypress, it makes the best experience to simulate a human interaction with the website to avoid the server treat the activity as a scrapper.
The scheduled task is a cost-effective solution to making use of the CI schedule build capability and notification feature (slack webhook integration). This reduced the need to setup a dedicated machine to run the task and send notification.
All config variables are stored in `cypress.json` file. You can change the product key word to search with `CONTENT` key.
