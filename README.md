# Helloworld
#### An example Node / Express application that uses AWS Copilot

Helloworld is a sample Node / Express application that simply displays a welcome web page. The application used express-generator to generate the framework and uses Express to route GET requests to display the templated page.

Below are instructions for using AWS Copilot to deploy this application as a Docker container via an AWS Copilot pipeline into a redundant, fully built-out  ECS / Fargate environment.

## Prerequisites
- Install Git
- Install Amazon CLI
- Configure with AWS credentials
- Install Copilot
##### Specific to this application:
- Install Node
- Install Express

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

copilot app init
```

Select New Application.

```sh
copilot svc init --name myapp
```

The process will ask what type of service to deploy. Select **Load Balanced Web Service**.

```sh
copilot env init --name test credentials
```
When prompted, use the AWS credentials you set up. They will be the defaults.
```sh
copilot env deploy --name test
copilot env init --name prod
copilot env deploy --name prod

copilot svc deploy --name myapp --env test
copilot svc deploy --name myapp --env prod

copilot pipeline init
```

Select Workloads)

```sh
copilot pipeline deploy
```

At this point you will get this message (do this to allow the deploy command to complete):

> ACTION REQUIRED! Go to https://console.aws.amazon.com/codesuite/settings/connections to update 
> the status of connection copilot-YOURNAME-YOURAPP from PENDING to AVAILABLE.

Go to the link and click **Create the Connection**.
Then select GitHub, give the connection a name, and click **Connect to GitHub**.
Then select your account under GutHub Apps and click the **Connect** button.
The pipeline deployment will now complete.

Push the Copilot files to the repository:
```sh
git add copilot/
git commit -m "Adding pipeline artifacts"
git push --set-upstream origin main
```

## Working

At this point you can develop code as normal, without interacting with Copilot itself. When you do a `git push` the pipeline will see it and kick off a new Source/Build/Deploy cycle automatically.

