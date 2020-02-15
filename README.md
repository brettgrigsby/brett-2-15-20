# Brett - 2.15.2020
## Installation

### API
```
cd api && yarn && yarn start
```
accesible at localhost:5000

### Client
```
cd client && yarn && yarn start
```
accesible at localhost:3000

## Security
With more time I would implement more checks on the files being uploaded. The size is checked both client and server side, but the server isn't doing more to make sure the file in a benign image.

## Improvements
I would test things. I am fully capable of writing tests, but got into the implementation and ran out of time.
Also, I would do more to ensure users aren't uploading the same file twice, as ids are just timestamps right now.

## Libraries

### Client
styled-components: css in js is just better, and styled-components is a clean familiar implementation

### API
express: easy and fast web server

cors: need to manage access to the api from the react app

multer: wanted a solid lib to accept the files as form data

## API
// Any general observation about the API?

### GET /documents
- Returns all documents uploaded to the server
- returns json array of objects of shape: { id, name, size }
- you can optionally pass a query param in the url like so:
```
GET /documents?searchText=worf
```
and it will return only documents whose name contains the searchText as a substring

### POST /documents
- create (upload) a new document
- returns a json object `{ msg: 'success' || 'failed' }`
- requires formdata containing an 'imageFile'

### DELETE /documents/{id}
- removes a document stored on the server
- returns a json object `{ msg: 'success' || 'failed' }`
- id url param must match the id for an existing document

---
## Other notes
I feel like there's so much more I wanted to do. 48 hours plus my normal life as a dad does not afford much time.
