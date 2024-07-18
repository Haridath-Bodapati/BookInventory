# BookInventory

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 18.1.1.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.dev/tools/cli) page.

json-server --watch db.json
npm install
ng serve

If you face issues while starting server.
Execute below commands and see whether they are resolving or not.
rmdir /s /q node_modules
del package-lock.json
npm cache clean --force

Open Your Browser and navigate to:

Book List: http://localhost:4200/books
Add a New Book: http://localhost:4200/new
Edit an Existing Book: http://localhost:4200/edit/1
Testing CRUD Operations:
Create: Add a new book using the /new route.
Read: View the list of books at the /books route.
Update: Edit a book at the /edit/:id route.
Delete: If implemented, test the delete functionality.


