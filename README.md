<p align="center">
  <img src=".github/docs/logo.png" width="300"/>
</p>

> An app to show the list of businesses locations from LA

[![Run in Insomnia}](https://insomnia.rest/images/run.svg)]()

# Backend Instructions

## Installation

### Dependencies 

Install the dependencies 
```bash
cd backend && yarn install
```

Create the environment variables based on `.env.example`

```bash
cp .env.example .env
```

### Setup database

Install [Docker](https://docs.docker.com/desktop/) in your machine and then run the following commands in order to create a Mongo container. 

```bash
docker-compose up
```

There's also other options to configure a Mongo database, refer to:
- https://medium.com/swlh/get-up-and-running-with-mongodb-in-under-5-minutes-abc8770b1ef8
- https://www.mongodb.com/cloud/atlas/signup

## Getting Started

Run the following command in order to start the application

```yarn dev```

# License

Released in 2020.
This project is under the [MIT license](https://github.com/LauraBeatris/hotseat-api/master/LICENSE).
