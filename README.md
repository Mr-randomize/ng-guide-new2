# NgGuideNew2

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 18.2.4.

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

## Building & Deploying
SPA - ng build 
  - client-side only, all code in browser, static host only
  - Bad for SEO
SSR
  - routes are rendered on demand on a dynamic web server (required)
  - Browser receives a finished rendered page
  - Long taking tests may cause empty pages, complexity
  - ng add angular/ssr
  - localStorage is browser, not server side (afterNextRender())
SSG
  - Pre-rendered at built time
  - Hydrated and becomes SPA
  - Dynamic WS is required
  - CONS: No dynamic server-side data fetching
  - text file to hold routes/files to be pre-rendered
