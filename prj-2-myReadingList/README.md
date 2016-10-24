# prj2-my-reading-list

I took the idea of this simple project from the project used in a Codeschool screencast
https://www.codeschool.com/screencasts/build-an-angularjs-app

I've completed redesigned the application (I kept only the css and part of html), scaffolded it with Yeoman, adding stub for testing, services and a backend via a json server.
You can compare my solution with the Codeschool solution https://github.com/codeschool/WatchUsBuild-ReadingListAppWithAngularJS

## Installing

Backend server:
You must install a json-server
1. npm install -g json-server
2. move the dbjson directory in another directory and open there a console
3. launch the json server with
   <yourpath>: json-server booksstores.json
4. you now have a bckend server at the address http:localhost:3000

Frontend app:
In a terminal/console Window from the directory containing the source code:
1. <yourpath>: npm install
2. <yourpath>: bower install
3. <yourpath>: grunt to build
4. <yourpath>: grunt server to launch the application

All your modifications on the code should be applied on the fly,
if not repeat step 3 and 4.

When you create a review you may need to refresh the main page,
I will update later the app to avoid this step.

The project is scaffolded with Yeoman so you also have the stubs for testing the components I will add some laters for the updated version.

Keep also an eye in my repository
https://github.com/RobertoLai/Angular2-projects
I will add there an Angular2 version


## Other information by Yeoman
This project is generated with [yo angular generator](https://github.com/yeoman/generator-angular)
version 0.15.1.

## Build & development

Run `grunt` for building and `grunt serve` for preview.

## Testing

Running `grunt test` will run the unit tests with karma.
