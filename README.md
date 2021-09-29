# lobTakeHome

### To install all dependencies
#### Execute 'npm install' in the projects directory

### to start the server in delopment mode (restarts server whenever changes are made)
##### Execute "npm run start-dev" in the projects directory
### to start the server in production mode
##### Execute "npm run start-prod" in the projects directory

#### Endpoints
#### http://localhost:8080/searchAddresses

##### Accepts a post request followed along with meta data that is used for the search in JSON file
##### Data that is sent through the request should be JSON structured with the key 'data' and the value being what you wish to query

###### Example -> post(http://localhost:8080/searchAddresses, {'data' : 'query goes here'})

#### http://localhost:8080/createAddress

##### Accepts a post request followed along with meta data that you wish to add to JSON file /temp database
##### Data that is sent through the request should be JSON structured with the key 'data' and the value being what you wish to add

###### Example -> post(http://localhost:8080/createAddress, {'data' : 'new address goes here'})


