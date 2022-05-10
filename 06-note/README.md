---
title: System Design (Note Part6)
---

## HTML, CSS, JavaScript (Note Part1)
https://github.com/hanwenzhang123/frontend-note/blob/main/01-note/README.md

## React, Redux (Note Part2)
https://github.com/hanwenzhang123/frontend-note/blob/main/02-note/README.md

## JS Cheatsheet (Note Part3)
https://github.com/hanwenzhang123/frontend-note/blob/main/03-note/README.md

## Boilerplate Code (Note Part5)
https://github.com/hanwenzhang123/frontend-note/blob/main/05-note/README.md


## Table of Contents
- [System Design](#system-design)
- [SDLC](#SDLC)
- [Sockets](#sockets)
- [Docker](#Docker)
- [AWS](#aws)
- 

  
## System Design
https://github.com/hanwenzhang123/interview-note/blob/main/coding-interview/28-design-question.js

#### Design Pattern
- creational: singleton, prototype, builder, factory
- structural: facade, proxy
- behavioral: iterator, observer, mediator, state

#### Singleton Pattern
- an object that can only be instantiated once
- ensures only a single instance of an object exists within a system at any given time

#### Prototype Pattern
- for clone - inheritance - comes from an object that is already been created, share functionality between objects

#### Builder Pattern
- create object step by step using methods rather than constructor, return this which is a referfence to the object instance
- allows us to implement method chaining where we instantiate an object then chain methods to it, but always get the object as the return value

#### Factory Pattern
- using a subclass, function or method that determine which object to instantiate instead of the new keyword (more maintainable)

#### Facade Pattern
- A simplified API to hide other low-level details in your code

#### Proxy Pattern
- Substitute that replaces the real thing, replace a target object with a proxy
- getter setter, setter changes data, and re-render, use reflect to updated the date on the original object
- work with a proxy just like the original object but it can trigger these side effects behind the scenes

#### Iterator Pattern
- allows you to traverse through a collection of objects (like for loop, iterating through), a pull-based system

#### Observer Pattern
- allows many objects to subscribe to events that are broadcast by another object, one to many relationship, a push-based system

#### Mediator Pattern
- like a middleman or broker, objects communicate to each other, many-to-many relationship, like middleware in express

#### State Pattern
- object behaves differently based on a finite number of states in your code (object behavior predictable based on its underlying state)
- use conditional logic or switch statements to handle a bunch of different possibilities based on the state or data in your application

#### Pipeline Design Patterns
- set of automated processes and tools that allows both developers and operations professionals to work together to build and deploy code to a production environment for CI/CD in a deployable state at any point.

#### Shared Component Architecture
- build, distribute and collaborate over components to build multiple projects and applications
- how to develop components independently but avoid the overhead of too many repositories
- how to version, publish and manage each component individually
- how to help others discover and adopt the components

#### MVC Architecture
- Browser communicate with Controller (involve with making decision)
- Controller talks to Model (data/database related)
- Model will return the result back to Controller, Controller decides when it is ready to return the result to the browser via View

- Model (ActiveRecord): the data and the database, the structure of data, the format and the constraints with which it is stored
- View (ActionView): the user interface, what is presented to the user, and what the user sees (ActionPack with Controller)
- Controller (ActionController): request-response handler, controls the requests of the user and then generates appropriate response to the viewer 

- Model displays View
- View sends requests to Controller, Controller renders on the Views
- Controller manipulates Model

- Purpose: how the code should be organized and how the different parts of an application are separated for proper readability and debugging => designed to not repeat yourself

#### Micro-services Architecture
- focuses on building many different small independen services that each do a single task and do one thing well
- splits large applications into much smaller pieces that exist independently of each other.
- like one server for chat server, one for caching, one do node.js only, one do Golang for concurrent task, one for message board
- a flexible and efficient approach to designing software systems that are made up of small independent services that each have a specific and well-defined purpose.
- consider => what goes into building, deploying, and updating an enterprise application => and break that work into more manageable, efficient batches.

[[↑] Back to top](#table-of-contents)


## SDLC

#### Software Development Lifecycle
- Requirement Analysis, Planning, Design, Build, Document, Test, Deploy, Maintain.

#### Planning
- During the planning phase, the team creates personas and determines the cost and resources required for implementing the requirements. 
- We also take the design plan seriously. Then we follow best practices in software development, code review, code style, good documentation, use automation tools, use linting tools, meaningful variable names, and more.

#### Deployment
- Before deployment, we would make sure the  application was ready for delivery, and make sure it passed all the required tests. 
- In terms of how we deliver new features, we have a devops developer dedicated to it with all the CI/CD work, managing the pipeline.

#### Agile PM
- The workflow is attending daily stand-ups, weekly sprint planning, working on the ticket that has been assigned to me, as well as attending other scrum meetings like review, backlog refinement, retrospective
- We have 2 weeks long sprints. There are 6 sprints in each quarter. We keep a 3 months (quarterly) release cycle.
- Sprint 1 to Sprint 5: should be dedicated to development
- Sprint 6: final testing and release + investigation of new features for next quarter
- during Sprint 6 last 3 days we have PI Planning
- SAFe is our framework of scrum

#### DevOps
- intersection of development and operation (python, node, ruby)
- source control, operating system (bash, linux), networking, cloud providers, infrastructure as code, container, configuration management, CICD, data analytics log management

#### CI/CD
- CI/CD Pipeline design pattern to auto deploy, deployable state at any point, the library platform like Jenkins / Circle CI / TravisCI / Gitlab / GitHub actions 
- CI - developers integrate code into a shared repository and all tests are passed and compatible with the rest, each change is small and easy to debug. 
- CD - keep your code base deployable at any point. Teams produce software in short cycles and in a sustainable way, all types of code changes are automatically prepared for a release to production. 

#### CI/CD Workflow
- plan - code - build - test - release - deploy - operate - monitor - plan (cycle repeats forever)
- source code management => the build (compile) - add unit test => the release (deploy to server) - add integration test / UI test 
- Jenkins - tool for building and testing

#### CI/CD Benefits
- CI/CD keeps software continuously written, integrated, analyzed and deployed to its customers
- CI/CD helps test new code to ensure the logic makes sense, code formetted correctly, and fulfills the scope of the project
- CI/CD allows faster spped in the market place (shorter cycle time)

[[↑] Back to top](#table-of-contents)
 
 
## Docker

#### What is Docker
- Package software so it can run on any hardware (dockerfile, image, container)
- Dockerfile: create an image based on the instructions of your Dnockerfile
- Scenarios: set up a new project, same setup across different systems, same setup across different projects or developers

#### Docker Components
- docker container: mongodb in a container, react frontend in a container, node express server in a container
- image: blueprint - contains all the information that our container needs to build a container exactly the same way across all systems
- volumn: holds the data of your containers, data that changes is on the volumns if your app are on containers that are static
- networking: allow all the items above to communicate with each other 

#### Why Docker
- Docker scales (structures) your apps very easily, comes with a whole set of tools for deploying across many clusters you can take your instances each micro-services that you have in each container (it contains your app in a certain space), and then allocate many machines to them.
- You can specify how many of the resources of each machine you want, specify rules about how they should scale, what should happen if they crash, make everything scalable

#### Docker Containers
- Allowing apps to run on multiple different clouds or computing environments with very little effort (light weight)
- To run a container, you first need to create a docker image and store it somewhere
- Elastic Container Registry allows you upload an image allowing other tools like Elastic Container Service to pull it back down and run it
- Elastic Container Service is an API for starting, stopping and allocating virtual machines to your containers, and alllow you to connect them to other products like load balancers

#### Swarm
- Tool installed and enabled by default with docker
- Allows to cluster, manage and schedule containers (manage one big cluster of containers)
- The machines in the swarm can be physical or virtual, referred to as node, in each node you have your containers (multiple containers in a node)
- In Swarm manager, you define and manage the entire cluster of node, which contains own containers and could do load balancing across all nodes
- `docker swarm init`

#### Kubernetes
- similar to swarm but the industry standard, offers similar tools like clustering, scaling, scheduling, deployment
- use same concept of nodes for ending multiple containers, but the size of your network can build in thousands of nodes
- schedule and deploy large cluster

#### Kubernetes Services
- more control over how their app scales in which case Elastic Kubernetes Service (EKS) is a tool for running kubernetes
- Fargate: have your containers behave in a more automated way, like serverless functions, allocating EC2 instances for your containers
- App Runner: point to a container image while it handles all the orchestration and scaling behind the scene
- Orchestration is the automated configuration, management, and coordination of computer systems, applications, and services.

#### Swarm vs Kubernetes
- swarm: a tool that is tightly with docker
- kubernetes: industry standard, more customized tool

[[↑] Back to top](#table-of-contents)


## Ansible

#### 

[[↑] Back to top](#table-of-contents)


## Jenkin

#### 

[[↑] Back to top](#table-of-contents)


## AWS

#### Amazon Web Services
- AWS is a hosting providers that give you a lot of services where you can run your application on the cloud
- global cloud platform which allows you host and manage services on the internet to host infrastructures 
- infrastructure as service: they provide their servers as service so you do not need to manage the backup and the power supply of the service
- platform as service: you can get java, ruby, php as a service so you do not need manage the binaries of these applications
- software as service: email sending capabilities, message queueing service (exchange data using point-to-point or publish and subscribe patterns)
- cloud storage platform: storage options like S3 (simple storage service), EBS (elastic block store), EC2 (elastic computer cloud), VPC (virtual private cloud)

#### AWS Services
- Elastic Computer Cloud (EC2): create virtual computer in the cloud, choose OS, memory and computer power, then run in the cloud, use instance as server for web application, but as your app grows, you would need to distribute traffic across multiple instances
- Load Balancing: allows developers to distribute traffic to multiple instances automatically
- Cloud Watch: collect logs and metrics from each individual instance
- Auto Scaling: data collected from cloud watch, then auto sclae in which you define policies that creates instances as they needed based on the traffic and utilization
- Elastic Beanstalk: additional layer of abstratcion on top of EC2 and other auto scaling by choose a template, deploy your code and auto scaling happens automatically
- Lightsail: do not care infrastructures, like a wordpress site, just a static server always running in the cloud
- Lambda: serverless computing, upload code, choose event that decides when that code should run, traffic scaling and networking happen in the background
- Serverless Repo: find pre-built function that you can deploy with a click of a button, not writing code
- Outposts: AWS APIs on your own infrastructure without throwing your old servers in garbage

#### Security & Essentials
- IAM: identity & access management for security, create rules to determine who has access to what on your AWS account
- Cognito: enables users log in with variety of different authentication methods for security
- Simple Notification Service (SNS): push notifications
- Simple Email Service (SES): send emails to users
- Cloud Formation: organize and provision tools, create templates based on your infrastructure in yaml or json allowing you to enable many different services with a button
- Amplify: interact with services from a front-end application like IOS, antroid or web that provides SDK (software development kit) from JS frameworks to others

#### Data Storage
- Simple Storage Service (S3): storage data in the cloud, any type of file or object like videos images, great for general purpose file storage
- Glacier: archive files which you do not access often for lower cost
- Block Storage: ideal for intensive data processing requirements, extremely fast and can handle a lot of throughputs, but requires more manual configuration by the developer
- Elastic File System: highly performant and fully managed, but higher cost

#### Database: structured data for end users
- Simple DB: a general purpose NoSQL database (too simple)
- Dynamo DB: document database easy to scale horizontally (no good at modeling relational data)
- Document DB: like mongodb 
- Elastic Search: full test search engine
- Relational DB (RDB): SQL, fully manage things like backup, patching and scale
- Aurora: SQL, better performance at lower cost, serverless options that make it easier to scale
- Neptune: graph database on highly connected data sets like social nets and recommendations
- Elastic Cache: for faster performance, fully managed version of redis, in memory database that delivers data to your end users with low latency
- Time Stream: time-based data like stock market with additional features for analytics
- Quantum Ledger: allows you build an immutable set of cryptographically signed transanctions (similar to decentralized blockchain technologies)

#### Analytic: analyze data
- Redshift: store data, a data warehouse that shift away from oracle
- Lake Formation: large amount of unstrtuctured data, tool for creating data lakes or repositories that stores a large amount of unstructured data
- Kinesis: analyze real-time data, capture real-time streams from your infrastructure
- Map Reduce: run like apache spark for operating massive datasets with a parallel distributed algorithms
- Managed Apache Kafka (MSK): managed version of the popular open source data streaming service Apache Kafka
- Glue: serverless product that extract, transform and load your data that can auto connect to other data sources, good for machine learning (predict future)
- Data Change: purchase and subscribe quality data from third-party sources
- SageMaker: building machine learning models with tensorflow or pi torch
- Rekognition: image analysis
- LEX: build chatbots with conversational AI
- Deep Racer: for scale race car

#### Robot
- RoboMaker: simulate and test your robots at scale
- IOT Core: collect data, update software and manage robot remotely
- Ground Station: global network of antennas to connect data
- Bracket: research computing like quantum computer
- Snow: mini data center that can work remote or entreme hostile environment for scientist

#### Component File Structure
- For the file structure, you can group files and split components by features or routes in the source code, or by the types
- view components (display information and emit user input via callbacks that forwards data from child to parent)
- control components (store state related to partial input that keeps track of actions the user has taken, lifecycle, ref to DOM)
- controllers (business logic doesn’t need to be placed in React components, redux store)
- container components (HOC, APP, Redux connect)
- In the source folder, you can have components, assets (pictures), store (context), routes, server (api, socket.io), and more as needed, but try to avoid too much nesting. 
- In the components folder, you can have sub-components for each feature present in the App like UI, card (props.children), styled components (.style.js) and utils file.

[[↑] Back to top](#table-of-contents)
