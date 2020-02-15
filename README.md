# Brett - 2.15.2020
## Installation
From the root directory of the repository run

```
docker-compose up
```

## Security
// List security concerns:
// - that have been addressed
// - that have *not* been addressed
## Improvements
// What could be added to the app / API?
## Libraries
### Client
styled-components: css in js is just better, and styled-components is a clean familiar implementation
### API
express: easy and fast web server
cors: need to manage access to the api from the react app
multer: wanted a solid lib to accept the files as form data
## API
// Any general observation about the API?
// document each endpoint using the following template:
```
### GET /documents
// Description of the endpoint:
// - Returns all documents uploaded to the server
// - returns json array of objects of shape: { id, name, size }
// - you can optionally pass a query param in the url like so:
GET /documents?searchText=worf
and it will return only documents whose name contains the searchText as a substring
### POST /documents
// Description of the endpoint:
// - create (upload) a new document
// - returns a json object { msg: 'success' || 'failed' }
// - requires formdata containing an 'imageFile'
### DELETE /documents/{id}
// Description of the endpoint:
// - removes a document stored on the server
// - returns a json object { msg: 'success' || 'failed' }
// - id url param must match the id for an existing document
```
---
## Other notes
// Anything else you want to mention
