# contact-keeper

contact list with database sync

React + Express + Mongodb + Node.js

## API setup instructions

### MongoDB Connection:
 
1 - Create MongoDB Atlas account and then create a new database using the free tier. (You may had to specify which IP you want to allow to connect to the DB).

2 - Add a new user using the `DATABASE ACCESS` tab. Select Read and write to any DB. set a username and password too.

3 - Go to CLUSTERS tab and then click on `CONNECT > CONNECT TO YOUR APPLICATION`. And copy the connection string. You will use this very soon.


### JWT and mongoURI defaults:
Inside the folder config create a file "default.json". and include the following fields:

{
  "mongoURI": "paste your connection url and change the <password> field to actual password. Don't forget to remove the < >",
  "jwtSecret": "put some secret for json Web Token"
}
  
### Starting the server with nodemon:

`npx nodemon run server`
