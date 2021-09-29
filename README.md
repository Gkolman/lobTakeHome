# lobTakeHome

## to install all dependencies
### run 'npm install' in the projects directory

#### to start the server in delopment mode (restarts server whenever changes are made)
##### execute "npm run start-dev" in the terminal
#### to start the server in production mode
##### execute "npm run start-prod" in the terminal

#### endpoints
#### http://localhost:8080/request

##### accepts a post request followed along with meta data that is used for the search in JSON file
##### data that is sent through the request should be JSON structured with the key 'data' and the value being what you wish to query

###### ex -> post(http://localhost:8080/request, {'data' : 'query goes here'})

#### http://localhost:8080/createAddress

##### accepts a post request followed along with meta data that you wish to add to JSON file /temp database
##### data that is sent through the request should be JSON structured with the key 'data' and the value being what you wish to add

###### ex -> post(http://localhost:8080/request, {'data' : 'new address goes here'})


