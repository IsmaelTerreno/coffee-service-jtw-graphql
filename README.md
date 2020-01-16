#How to use the API

Start the app by the command:
`npm install` and later just execute `npm start`

Go to the playground:
http://localhost:4000/

First you need to make a registration for a new user you can execute the following example:

    
    mutation{
      register(username: "banner", password: "banner"){
        username
      }
    }
    

Second just make a login and receive a JWT. To make this possible you can execute the following example:


    mutation{
      login(username: "banner", password: "banner"){
        user{
          username
        },
        token
      }
    }

Third consume the private resource which in this case is the list of coffee using the JWT received in the step two mentioned above. 

Include the JWT token in the authorization header like:

`authorization: Bearer [JWT token]` 

And then you can make the following query:

    query{
     coffees{
       name,
       description,
       price
     }
    }

You can see this video for a quick demo:

