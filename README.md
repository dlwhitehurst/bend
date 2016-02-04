#Bend - A BackEND REST-API Server

The Bend application server runs on the Node.js platform and currently uses Express to model the REST API resources that it hosts. The application requires a MongoDB instance to persist its data. This server provides its resources via REST calls over HTTP. These URL resources can be used by any application technology that can consume REST services.

The Bend application server will provide a Swagger API specification web page or Open API Initiative compliant description of the REST API when the software is ready for official release.

## Prerequisites

This application requires a globally-installed Node.js and npm. It also requires that you install MongoDB. 

## Usage

Clone this application into a directory of your choice. Use git to clone the source.
Clone: `git clone https://github.com/dlwhitehurst/bend`

Your Bend application is created in the directory where you ran the clone operation. To begin, `cd bend` into the project directory.

Install: `npm install`

Run: `node server`

