# Designing Cloud-Based Progressive Web Applications with NestJS, React, GraphQL, and the AWS Cloud Development Kit

## Initial Setup

### Create Project Directories

```
mkdir nestjs-react-graphql-cdk && cdk $_
touch README.md
git init
git add . && git commit -am "Initial Commit"
mkdir -p recipe-site/infrastructure recipe-site/services recipe-site/websites
```

### Set up VS Code Workspace Configuration

```
touch recipe-site.code-workspace
```

### Website Setup

```
cd ./recipe-site/websites
npx create-react-app recipe-web --use-npm
cd recipe-web && npm start
```

### API Setup

```
cd ../../services
npm i -g @nestjs/cli
nest new recipe-service # At the prompt, select npm
cd recipe-service
```

- Nestjs applications and create-react-app applications both use port 3000 to listen for requests
- If we attempt to run both the web development server (create-react-app) and the API server, we will get an error
- Update `recipe-service/src/main.ts` to use port 4000
  - Soon we will be reading this port from an environment variable, so this is just a temporary adjustment

```
npm start
```

- Using Postman, make a GET request to `http://localhost:4000`

## Initial Deployment

### Introduction to AWS CDK (Cloud Development Kit)

#### Create Sandbox

```
cd ../../.. # Out to the root project directory
mkdir -p ./sandbox/hello-cdk && cd $_
cdk init app --language=typescript
```

#### Understanding CDK Stacks

- Check out `./bin/hello-cdk.ts`
  - This is a CDK app. It's the root of our AWS configuration for this project
- Apps contain one or more stacks
- Check out `./lib/hello-cdk-stack.ts`
- This is a self-contained unit of deployment. It represents (and is transpiled down to) a CloudFormation template
- Stacks can be nested within stacks, but this can introduce additional complexity and limitations

#### Adding Resources to a Stack with Constructs

- Install an AWS-provided construct for S3
  - `npm install -S @aws-cdk/aws-s3`
- Deploy the stack
  - `cdk deploy`
- View the deployment process in the CloudFormation console
- Remove the asset and delete the project
  - `cdk destroy && cd ../..`

### Website Infrastructure

### API Infrastructure

## API Development

### Local Environment Setup

#### Docker and Docker-Compose Setup

#### Docker-Compose Configuration

### Server Authentication with Auth0

### Update Infrastructure

## Website Development

### Website Authentication with Auth0

### Authenticated Routes

## GraphQL API Development

### Adding the GraphQL Endpoint for our Recipe service

### Adding Resolvers

### Adding Mutations

### Testing in the GraphQL Playground

## GraphQL Website Development

### Adding Apollo GraphQL Client

### Executing GraphQL Queries

### Executing GraphQL Mutations
