# HelloWorld - Package and run the app in a container

## Build the docker image
`docker build -t sendy-she-codes:sendy .`

## Run the app in a container
`docker run -e org="Sendy" -p 8081:8081 sendy-she-codes:sendy`

## Request in browser
`visit http://localhost:8081/ and http://localhost:8081/she-codes`


------------------
# Docker networks

NodeJS server on the same network with a MySQL server

## Create docker network 

`docker network create she-codes --ip-range 192.24.10.0/16 --subnet 192.24.10.0/24`

## Create a mysql container and assign to the `she-codes` network

`docker run --network she-codes --detach --name mariadb-server --env MARIADB_USER=she-codes --env MARIADB_PASSWORD=password --env MARIADB_ROOT_PASSWORD=password --env MARIADB_DATABASE=users mariadb:latest`

## Exec into the DB server container and create the `users` database
`docker exec -it mariadb-server bash`

`mysql -h localhost -u she-codes -p` - Enter the password

`CREATE DATABASE users;`

`user users;`

## Create `users` table
`CREATE TABLE user(id INT NOT NULL, username VARCHAR(255) NOT NULL)`

## Insert some records

`INSERT INTO users(id, username) VALUES(1, 'test-1')`

## Exit from the DB server console 

`exit`

## Build and Run the Node app with similar network settings

`docker build -t she-codes-sendy:network .`

`docker run --network she-codes -e DB_HOST=mariadb-server -e DB_USER=she-codes -e DB_PASSWORD=password -e DB_DATABASE=users --name=node-app she-codes-sendy:network`