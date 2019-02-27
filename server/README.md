# DataLodge: Photos API v1.0

## Get Photos 

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

## Post Photos

- **URL**: `/pictures/post/:homeId`

- **Method**: `POST`

* **URL Params**: `homeId` _(Integer)_ - ID of the home to associate the new posted photo to

* **Success**: 
  * Code: 201

* **Error**
  * Code: 400 Bad response error

##  Delete Photo

- **URL**: /pictures/delete/:picId

- **Method**: `DELETE`

- * **URL Params**: `picId` _(Integer)_ - ID of the pic in the db to delete

* **Success**: 
  * Code: 201

* **Error**
  * Code: 400 Bad response error
