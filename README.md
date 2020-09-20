# Zebfi microservice starter nodejs

Nodejs starter project with typescript as a programming language.

## Root Folder architecture:

### Folders

#### 1. Caching

Responsible for keeping a caching service for rapid dumping and reading of data

#### 2. Config

Responsible for keeping program specific configurations.

#### 3. controllers

Responsible for handling requests and responses from the routes.

#### 4. database

#### 5. enums

Typescript enums, it should contain separate files for separate enums.

> Naming convention
>
> `filename.enum.ts`

#### 6. interfaces

Typescript interfaces, it should contain separate files for separate interfaces.

> Naming convention
>
> `filename.interface.ts`

#### 7. middlewares

Express middlewares functions used to add additional functionality while routing the requests.

#### 8. routes

Express routes responsible for creating managed routes.

> Structure convention
>
> create a file with the name matching the task of the route and place all the routes inside it. Check `user.route.ts` as an example.
>
> Naming convention
>
> `filename.route.ts`

#### 9. services

Responsible for containing the business logic. Mostly between controllers and database.

> Naming convention
>
> `filename.service.ts`

#### 10. streams

Message broker streams for inter microservices communication.

Contains two folders for segregating consumers and producers. These folders shall have producer and consumer files which will call the methods inside `kafka_stream_provider.ts`.

> Naming convention
>
> `filename.producer.ts`
>
> `filename.consumer.ts`

#### 11. subscribers

Responsible for subscribing to the nodejs Observable. For internal observable pattern implementation.

> Naming convention
>
> `filename.subscriber.ts`

#### 12. tests

Responsible for unit tests for the project.

#### 13. utils

Responsible for helper functions to be used in the project.

### Files

- app.ts  
  Responsible for entire app level server configuration.

- constants.ts  
  Responsible for containing app level constants.

- server.ts  
   App Starter file.

### API documentation

This project user apidoc for documenting apis.

- Installation
  `npm install apidoc -g`
- Example

```
/**
 * @api {post} /user Add User information
 * @apiName AddUser
 * @apiGroup User
 *
 * @apiParam {String} firstname Users Firtsname.
 * @apiParam {String} lastname Users LastName.
 * @apiParam {Number} age Users Age.
 *
 * @apiSuccessExample {json} Success-Response:
 *     HTTP/1.1 200 OK
 *     {
 *       "error": 0,
 *       "message": "Success",
 *       "user": {
 *          "firstName": "Jane",
 *          "lastName": "Doe",
 *          "age": 24
 *        }
 *     }
 */
router.post("/", userMiddleware.isAuthenticated, userController.addUser);
```

- Run
  `apidoc -i ./src/routes/ -o ./api-documentation`

- More Details
  [here](https://apidocjs.com/#i)

### How to use this repo as a starter for new Project:

Refer to Github official documentation for Bare mirroring of the code:  
https://docs.github.com/en/github/importing-your-projects-to-github/importing-a-git-repository-using-the-command-line
