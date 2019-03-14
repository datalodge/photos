# DataLodge: Photos API 

## Overview

The front-end has been built out by Erik Brinsmead. The focus of my project was building out and scaling the back-end to handle production-level traffic for a photos component in an Airbnb-like app.

## Related Projects

- https://github.com/datalodge/calendar
- https://github.com/datalodge/reviews
- https://github.com/datalodge/amenities

## Getting Started

- npm install
- instantiate Cassandra
- Grab pics with picGrabber file and upload to Amazon S3
- Create CSV file with appropriate links using csvSeed file
- Seed instance of Cassandra
- Redirect driver towards personal Cassandra instance
- npm run react-dev
- npm start

## Routes

## GET Photos 

- **URL**: `/pictures/:homeId`

- **Method**: `GET`

* **URL Params**: `homeId` _(Integer)_ - ID of the currently viewed home

* **Success**: 
  * Code: 200
  * Example Content: `{
	"_id": ObjectId("5c75f48791aaee4924dd8fd2"),
	"homeId": INTEGER,
	"url": "url as string",
	"thumb_url": "url as thumb string",
	"is_primary": boolean,
	"description": "description as string",
	"__v" : INTEGER
}`

* **Error**
  * Code: 400 Bad response error

# POST Photos

- **URL**: `/pictures/:homeId`

- **Method**: `POST`

- **Required Params**: homeId: [Number], url: [String], thumb_url: [String],
  is_primary: [Boolean],
  description: [String]

- **Data Params**: { homeId: Number, url: String, thumb_url: String,
  is_primary: Boolean,
  description: String }

* **URL Params**: `homeId` _(Integer)_ - ID of the home to associate the new posted photo to

* **Success**: 
  * Code: 201

* **Error**
  * Code: 400 Bad response error 


# Notes

This backend was built to support usage of Amazon EC2 instances and handle production-level traffic with 80 million data points.

GET | POST 
