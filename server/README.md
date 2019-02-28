# DataLodge: Photos API v1.0

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

## POST Photos

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

##  DELETE Photo

- **URL**: /pictures/:picId

- **Method**: `DELETE`

- * **URL Params**: `picId` _(Integer)_ - ID of the pic in the db to delete

* **Success**: 
  * Code: 201 | Content: "Delete Successful"

* **Error**
  * Code: 400 Bad response error | Content: "Delete not successful"



## PUT Photos

- **URL**: `/pictures/:homeId`

- **Method**: `PUT`

- **Data Params**: homeId: Number, url: String, thumb_url: String,
  is_primary: Boolean,
  description: String,

* **URL Params**: `homeId` _(Integer)_ - ID of the home to associate the new posted photo to

* **Success**: 
  * Code: 201 | Content: "Change successful"

* **Error**
  * Code: 400 Bad response error | Content: "Change not successful"



## Notes

GET | POST | DELETE | PUT