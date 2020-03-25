# Full-Stack Java React Starter

## Running Locally

### Server

1. Start the server by running `com.davidagood.fullstack.FullStackApplication`
1. Starts at http://localhost:8080

### UI

1. In `ui`
1. Run `yarn` to install dependencies
1. Run `yarn start`
1. Starts at http://localhost:3000
1. API calls, e.g. `/api/user`, are proxied to http://localhost:8080 (see `proxy` property in `package.json`)

## Building Executable JAR

1. From the root directory, run `./gradlew build`
1. The executable jar is created in `boot/build/libs`
1. Run the jar, e.g. `java -jar boot/build/libs/boot-1.0.0-SNAPSHOT.jar`

The UI bundle/assets are coped into `boot/src/main/resources/static` and are 
served by default by Spring Web. There's room for improvement here: the current 
solution relies on the `ui` module using the Gradle `java` plugin and defining 
a source set, and the `boot` module declares a runtime dependency on the `ui` module

## Java Modules

api, service, boot, common

__Based on ideas from https://reflectoring.io/spring-boot-gradle-multi-module/__

## UI Module

ui