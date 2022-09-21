# Helloworld
#### An example Node / Express application that uses AWS Copilot

Helloworld is a sample Node / Express application that simply displays a welcome web page.
The application used express-generator to generate the framework and uses Express to route GET requests to display the templated page.

Beow are instructions for using AWS Copilot to deploy this application as a Docker container via an AWS Copilot
pipeline into a redundant, fully built-out  ECS / Fargate environment.

## Prerequisites
- Install Git
- Install Amazon CLI
- Configure with AWS credentials
- Install Copilot
##### Specific to this application:
- Install Node
- Install Express
- OPTIONAL: Install express-generator 

## Building from the Repository
```sh
git init
git pull https://github.com/CharlesBeatty/helloworld.git
```
Rename the branch for GitHub if using older Git (master -> main)
```sh
git branch -m main
```
Continuing...
```sh
git remote add origin git@github.com:CharlesBeatty/helloworld.git

copilot app init  (select new application)
copilot svc init --name myapp (will ask what type -> select load balanced web service)

copilot env init --name test credentials, should use AWS ones you set up)
copilot env deploy --name test
copilot env init --name prod
copilot env deploy --name prod

copilot svc deploy --name myapp --env test

copilot svc deploy --name myapp --env prod

copilot pipeline init (select Workloads)
copilot pipeline deploy
```

You will get this message (do this to allow deploy command to complete):

> ACTION REQUIRED! Go to https://console.aws.amazon.com/codesuite/settings/connections to update 
> the status of connection copilot-YOURNAME-YOURAPP from PENDING to AVAILABLE.

Go to the link and click Create the Connection.
Then select GitHub, give the connection a name, and click Connect to GitHub.
Then select your account under GutHub Apps and click the Connect button.

Push the Copilot files to the repository:
```sh
git add copilot/
git commit -m "Adding pipeline artifacts"
git push --set-upstream origin main
```

## Working

At this point you can develop code as normal, without interacting with Copilot itself. When you do a `git push` the pipeline will see it and kick off a new Source/Build/Deploy cycle automatically.

