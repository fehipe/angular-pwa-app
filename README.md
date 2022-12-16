
DON'T SERVE IT WITH NG SERVE TO REGISTER THE SERVICE WORKER (EVEN WITH THE PRODUCTION FLAG, IT'S NOT FINDING THE ANGULAR SERVICE WORKER)
first do:
ng build --configuration production
then go to the dist folder, and to the subfolder where the index.html file from the project is, and serve with:
Terminal 1:
http-server -c-1 .

TO DEVELOP THE REST OF THE FEATURES, USE ng serve

---------------------------------------------------------------------------------------------------------------



# AngularPwaApp

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 12.0.0-next.5.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
