# Aava-API integrations

This project provides sample applications that read data from integration sources and write to Aava-API.
The applications are runnable from the command line interface.

The applications are provided both for direct use as runnable application in customer integrations,
and as a reference implementation for developing integrations for importing data to Aava-API from other HR systems.

This code is provided as-is, without any warranties. You are free to use it as you wish.

# Implementations

## GraphQL-client

The GraphQL-client implementation uses apollo-client to communicate with the GraphQL server.
This is the recommended method.
The implementation utilizes type definitions generated using graphql-codegen.

## HTTP-client

The HTTP client uses plain HTTP to communicate with the GraphQL API. This is useful if you want to keep external dependecies
(or GraphQL competency) to minimum.

Please note that as GraphQL has deviated from REST, some practices, such as relying only on HTTP response codes, are not sufficient.
The reason for including this implementation is merely to demonstrate that it _can_ be used.

# Running

Before running either application, copy `properties-template.json` to `properties.json` and
fill in the endpoint address, credentials and organization identification all provided by Aava.

To install dependencies run `yarn install`.

To run either application, change to the corresponding directory (`graphql-client` or `http-client`) and run `yarn cli --help` for further instructions.
You can run `yarn cli hello` to verify that everything is set up correctly and the credentials and endpoint are working.

Examples of each input type are provided in the `examples` directory. Please do not send these examples to your production API instance.

# Codegen

The repository contains code generated from the GraphQL schemas at [generated/aava-api-type.ts]. To run codegen,

1. download the SDL version of the schema from Aava-API GraphQL Playground, save it locally to an empty directory,
1. set value of environment variable `SCHEMA_DIR` to the path of the directory, and run
1. run `yarn graphql-codegen`

The code was generated using [graphql-codegen](https://graphql-code-generator.com/)

This step is necessary only when the Aava-API GraphQL schema has been updated and you want to use the new types in your own code.

Please note that the exported schema does _not_ contain operations.
If it did, response types would not need to be defined inline in graphql-client.ts, generated types could be used instead.
