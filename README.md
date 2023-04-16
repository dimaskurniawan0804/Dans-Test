# Dans Multi Pro - Take Home Test

In this repository there are 2 parts, namely the server and client

## For Server

After cloning the repository, enter the 'SERVER' folder then run the 'npm install' command on the terminal

### Config db and env

In the config.ts file adjust the 'MONGO_URL' and 'MONGO_URL_LOCAL' variable, make the env in the .env file

Use mongo atlas for this config.
Enter Atlas from your browse and login, then enter the database menu in the sidebar, then select the connect menu then the shell menu and follow the instructions.

After successfully connecting to your database,
do seeding data by hitting the endpoint with an http request POST, at the url example="http://localhost:'3000'/jobs"

Then enter the 'npm run dev' command to run the server on your local network

## For Client

In the root folder run the command 'npm install' then 'npm run dev' and open the web on your browser
