# Webshop



## Running the application
To launch this applicaton need to have NPM, .NET build tools and Docker installed. 


The application is currently hardcoded to connect to specific localhost ports, frontend: ```5173```, mysql database: ```5174``` and .NET: ```5175```. Provided the ports are unused there are two options to launch the full application:

1. Run the ```launchAll.bat``` script in the root directory.


2. Launch each project manually;
 -  Backend
```
  cd backend/Webshop.Api
  dotnet run
```
- Frontend
```
  cd frontend
  npm run dev
```
- Database
```
  docker compose up
```

## Description

The primary goals of this project were to implement a Clean Architecture based backend, refresh my knowledge of .NET and the React ecosystems, and try out some tools I hadn't used before. 

Most of my experiance comes from working on my own or in very small teams, and I've mostly worked with the more straightforward layered architecture (Controllers > Services > Entities/Models/Repositories) in Java.

For the backend the intended architecture is a monolithic Clean Architecture with Command Query Responsibility Segregation and Domain Driven Design. 

But since the task is mostly about routing data rather than transforming it, the actual implementation isn't that much different from what I've usually done. With the only fundamental difference being that the role of services is replaced by use cases implemented with Commands/Queries, their handlers and validators.

The use case pattern is probably the most useful aspect of everything I've tried this weekend. The benefit I see is that by separating different paths through the system it makes it much easier to reason about the flow of data. To add, modify and remove paths. And it also encourages compositing of existing behavior rather than implementing it from scratch. Although I haven't touched that aspect much in this implementation.

On a practical level, by separating distinct paths into distinct files I've sidestepped the most personally annoying aspect of the service pattern, merge conflicts occuring from conceptually similar, but distinct paths living in the same service file. Definitely not the most important aspect, but one of the more personally appealing ones.

### Features
1. Authentication

Implemented using Asp.Net Core Identity with the user data stored on a local database. 

Since the frontend and backend are distinct projects and intended to run in different origins, the authentication is handled via access/refresh tokens. Which are persisted in LocalStorage.

#### Issues
The default implementations for the Asp.Net Core Identity libraries offer limited
customization and confusing defaults. 

The access token is stored in LocalStorage for demonstration purposes. A new one should be fetched with a refresh token instead.

2. Products

The infinitely scrolling list is implemented by the frontend requesting a specific chunk of the database table. The backend provides this chunk by sorting the database table, skipping the number of items that client has already retrieved and then returning that chunk.

This allows the client to query any arbitrary chunk from the table. And the results are cached so 

#### Issues

To ensure the right order, the backend sorts the whole table and skips items until it reaches the right chunk. I'm a little uncertain on how exactly EntityFramework interacts with a MySQL database, but this might cause performance issues.


3. Cart

Since the backend doesn't store any session information, the cart is persisted in LocalStorage 

#### Issues
It currently saves the whole product in a cart. This does mean that the backend isn't queried every time the cart is checked. It might be better to store partial info like (id, name, price) and periodically query the backend for updates. 

4. Notifications

On the backend a command handler can be called to create a record thats tied to a user id in the database. The frontend queries an endpoint periodically and displays it to the user if the most recent notification is different than the last received.

#### Issues

Messages aren't deleted from the database at the moment. And on the client side they aren't persisted, so on a page reload the most recent message will be displayed again. 

After logging in the client will keep querying the notification endpoint until reload. Even after logging out.

## What I would do next

1. Testing, Validation and Error handling

This is currently the most lacking aspect of this project.

Since I spent a lot of time researching and trying out different ways to implement Clean Architecture and didn't leave myself enough time for properly setting up unit tests, validation or 

I definitely need some customized exception handlers especially for the validation pipeline. 

2. A more proper notification system.

With more time I would use SignalR to setup a more proper message delivery system. 

And I would also try to figure out a better way to signal that a login or other events important to the user have occured. 

3. Authentication

The defaults from ASP.NET Core Identity work but are restricting in strange ways. If this was a production app, i would be very hesitant about using it before doing more research. 

I would prefer to use an authentication service provider. Or set up an authentication server that the backend and frontend queried with access tokens.



4. Actual theming.

Yeah... definitely not the prettiest frontend ever.

5. 