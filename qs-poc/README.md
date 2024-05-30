# QuickSight Demo

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 14.2.1.

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

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.



## Refer :
https://docs.aws.amazon.com/prescriptive-guidance/latest/patterns/embed-an-amazon-quicksight-dashboard-in-a-local-angular-application.html

ng serve --host my-qs-app.net --port 4200 --ssl --ssl-key "./src/my-qs-app.net-key.pem" --ssl-cert "./src/my-qs-app.net.pem" -o

## userArn
aws quicksight list-users --aws-account-id 123456789012 --namespace default

## Ref : https://docs.aws.amazon.com/quicksight/latest/user/embedded-analytics-full-console-for-authenticated-users.html
    aws quicksight generate-embed-url-for-registered-user \
    --aws-account-id 123456789012 \
    --session-lifetime-in-minutes 600 \
    --user-arn arn:aws:quicksight:us-east-1:123456789012:user/default/venkat_j \
    --experience-configuration QuickSightConsole={InitialPath="/start/dashboards"}

## Ref : https://docs.aws.amazon.com/quicksight/latest/user/embedded-analytics-dashboards-for-authenticated-users.html
aws quicksight generate-embed-url-for-registered-user \
        --aws-account-id 123456789012 \
        --session-lifetime-in-minutes 600 \
        --user-arn arn:aws:quicksight:us-east-1:123456789012:user/default/venkat_j \
        --experience-configuration Dashboard={InitialDashboardId=de637e30-699b-426f-bd9d-095de3eb5943}
    





